"use strict";

/* const designCollapseBtn = document.querySelector(".js_designCollapseBtn");
const fillCollapseBtn = document.querySelector(".js_fillCollapseBtn");
const shareCollapseBtn = document.querySelector(".js_shareCollapseBtn"); */
const showDesignBtn = document.querySelector(".js_showDesignBtn");
const showFillBtn = document.querySelector(".js_showFillBtn");
const showShareBtn = document.querySelector(".js_showShareBtn");
const designSection = document.querySelector(".js_designSection");
const fillSection = document.querySelector(".js_fillSection");
const shareSection = document.querySelector(".js_shareSection");

function resetBreadCrumbsState() {
  showDesignBtn.classList.add("breadcrumbs__step");
  showFillBtn.classList.add("breadcrumbs__step");
  showShareBtn.classList.add("breadcrumbs__step");
  showDesignBtn.classList.remove("breadcrumbs__step--selected");
  showFillBtn.classList.remove("breadcrumbs__step--selected");
  showShareBtn.classList.remove("breadcrumbs__step--selected");
}

function hideAllFormSections() {
  designSection.classList.add("collapsed");
  fillSection.classList.add("collapsed");
  shareSection.classList.add("collapsed");
}

function handleClickShowDesignBtn(ev) {
  ev.preventDefault();

  resetBreadCrumbsState();
  hideAllFormSections();

  showDesignBtn.classList.add("breadcrumbs__step--selected");
  designSection.classList.remove("collapsed");
}

showDesignBtn.addEventListener("click", handleClickShowDesignBtn);

function handleClickShowFillBtn(ev) {
  ev.preventDefault();

  resetBreadCrumbsState();
  hideAllFormSections();

  showFillBtn.classList.add("breadcrumbs__step--selected");
  fillSection.classList.remove("collapsed");
}

showFillBtn.addEventListener("click", handleClickShowFillBtn);

function handleClickShowShareBtn(ev) {
  ev.preventDefault();

  resetBreadCrumbsState();
  hideAllFormSections();

  showShareBtn.classList.add("breadcrumbs__step--selected");
  shareSection.classList.remove("collapsed");
}

showShareBtn.addEventListener("click", handleClickShowShareBtn);

const data = {
  palette: 1,
  name: "",
  job: "",
  email: "",
  phone: "",
  linkedin: "",
  github: "",
  photo: "",
};

const inputs = document.querySelectorAll(".js_input");

const namePreview = document.querySelector(".js_namePreview");
const jobPreview = document.querySelector(".js_jobPreview");
const phonePreview = document.querySelector(".js_phonePreview");
const emailPreview = document.querySelector(".js_emailPreview");
const linkedinPreview = document.querySelector(".js_linkedinPreview");
const githubPreview = document.querySelector(".js_githubPreview");

function renderPreview() {
  namePreview.innerHTML = data.name || "Nombre Apellidos";
  jobPreview.innerHTML = data.job || "Front-end developer";
  emailPreview.href = `mailto:${data.email}` || "#";
  phonePreview.href = `tel:${data.phone}` || "#";
  linkedinPreview.href = `https://${data.linkedin}` || "#";
  githubPreview.href =
    `https://github.com/${data.github.replace("@", "")}` || "#";
}

function handleInput(ev) {
  console.log("Funciona", ev.target.id, ev.target.value);

  data[ev.target.id] = ev.target.value;

  console.log(data);
  renderPreview();
}

for (const input of inputs) {
  input.addEventListener("input", handleInput);
}
