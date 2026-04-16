const exec = require("child_process").exec;
const fs = require("node:fs");

function executeDiffAddedFiles() {
  return new Promise((resolve) => {
    // <https://stackoverflow.com/questions/2412450/git-pre-commit-hook-changed-added-files>
    exec(
      "git diff --cached --name-only --diff-filter=A",
      function (error, stdout, stderr) {
        resolve(stdout);
      },
    );
  });
}

function executeDiffModifiedFiles() {
  return new Promise((resolve) => {
    // <https://stackoverflow.com/questions/2412450/git-pre-commit-hook-changed-added-files>
    exec(
      "git diff --cached --name-only --diff-filter=CMR",
      function (error, stdout, stderr) {
        resolve(stdout);
      },
    );
  });
}

function getFileDates(filename) {
  const stat = fs.statSync(filename);
  const fileCreateDate = new Date(parseInt(stat.birthtimeMs))
    .toISOString()
    .split("T")
    .at(0);
  const fileUpdateDate = new Date(parseInt(stat.mtimeMs))
    .toISOString()
    .split("T")
    .at(0);

  return { fileCreateDate, fileUpdateDate };
}

function getFileContent(filename) {
  const content = fs.readFileSync(filename, "utf-8");
  return content.trim();
}

function getFrontmatterLines(filename) {
  const content = getFileContent(filename);
  const frontMatterLines = content
    .substring(3, content.indexOf("---", 3))
    .trim()
    .split("\n")
    .map((line) => line.trim());

  return { content, frontMatterLines };
}

function checkCreateDate(filename) {
  const { fileCreateDate, fileUpdateDate } = getFileDates(filename);

  // Get file frontMatter lines
  let { content, frontMatterLines } = getFrontmatterLines(filename);

  // Get create date
  const createDate = frontMatterLines.find((line) =>
    line.startsWith("createdAt"),
  );

  if (!createDate) {
    // Set create date
    content =
      "---" +
      content.substring(3).replace("---", `createdAt: ${fileCreateDate}\n---`);

    fs.writeFileSync(filename, content, "utf-8");
  } else if (
    !createDate.split(":")[1] ||
    !new RegExp(/(\d{4})-(\d{2})-(\d{2})/).test(createDate.split(":")[1])
  ) {
    content =
      "---" +
      content
        .substring(3)
        .replace(/createdAt:.*/g, `createdAt: ${fileCreateDate}`);
    fs.writeFileSync(filename, content, "utf-8");
  }
}

function checkUpdateDate(filename) {
  const { fileCreateDate, fileUpdateDate } = getFileDates(filename);

  // Get file frontMatter lines
  let { content, frontMatterLines } = getFrontmatterLines(filename);

  // Get create date
  const createDate = frontMatterLines
    .find((line) => line.startsWith("createdAt"))
    ?.split(":")[1]
    ?.trim();

  // Get update date
  const updateDate = frontMatterLines.find((line) =>
    line.startsWith("updateAt"),
  );

  if (createDate === fileUpdateDate) {
    return;
  }

  if (!updateDate) {
    // Set create date
    content =
      "---" +
      content.substring(3).replace("---", `updateAt: ${fileUpdateDate}\n---`);

    fs.writeFileSync(filename, content, "utf-8");
  } else {
    content =
      "---" +
      content
        .substring(3)
        .replace(/updateAt:.*/g, `updateAt: ${fileUpdateDate}`);
    fs.writeFileSync(filename, content, "utf-8");
  }
}

function checkFrontmatter(filename) {
  let content = getFileContent(filename);

  if (content.indexOf("---") < 0) {
    // No frontmatter
    content = `---\ntitle:\n---\n${content}`;
  } else if (content.indexOf("---") === 0) {
    // Only one divider
    const idxNextDivider = content.indexOf("---", 3);
    if (idxNextDivider < 0) {
      const idxDoubleLine = content.indexOf("\n\n", 3);
      const idxLastDoubleDot = content.indexOf("\n", content.indexOf(":"));

      const idxNextDivider =
        idxDoubleLine > 0
          ? idxDoubleLine
          : idxLastDoubleDot > 0
            ? idxLastDoubleDot
            : 3;

      content =
        content.substring(0, idxNextDivider) +
        "\n---\n" +
        content.substring(idxNextDivider);
    }
  }
  fs.writeFileSync(filename, content, "utf-8");
}

(async function () {
  const today = new Date().toISOString().split("T").at(0);

  const diffNewFilesOutput = await executeDiffAddedFiles();
  const newFiles = diffNewFilesOutput.trim().length
    ? diffNewFilesOutput.trim().split("\n")
    : [];

  newFiles.forEach((filename) => {
    checkFrontmatter(filename);
    checkCreateDate(filename);
  });

  const diffModifiedFilesOutput = await executeDiffModifiedFiles();
  const modifiedFiles = diffModifiedFilesOutput.trim().length
    ? diffModifiedFilesOutput.trim().split("\n")
    : [];

  modifiedFiles.forEach((filename) => {
    checkFrontmatter(filename);
    checkCreateDate(filename);
    checkUpdateDate(filename);
  });
})();
