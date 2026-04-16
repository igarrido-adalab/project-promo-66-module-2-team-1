"use strict";

const designCollapseBtn = document.querySelector(".js_designCollapseBtn");
const fillCollapseBtn = document.querySelector(".js_fillCollapseBtn");
const shareCollapseBtn = document.querySelector(".js_shareCollapseBtn");
const designSection = document.querySelector(".js_designSection");
const fillSection = document.querySelector(".js_fillSection");
const shareSection = document.querySelector(".js_shareSection");

function handleHoldUpDesignBtn(ev) {
  ev.preventDefault();

  designSection.classList.remove("collapsed");
  fillSection.classList.add("collapsed");
  shareSection.classList.add("collapsed");
}

designCollapseBtn.addEventListener("click", handleHoldUpDesignBtn);

function handleHoldUpFillBtn(ev) {
  ev.preventDefault();

  designSection.classList.add("collapsed");
  fillSection.classList.remove("collapsed");
  shareSection.classList.add("collapsed");
}

fillCollapseBtn.addEventListener("click", handleHoldUpFillBtn);

function handleHoldUpShareBtn(ev) {
  ev.preventDefault();

  designSection.classList.add("collapsed");
  fillSection.classList.add("collapsed");
  shareSection.classList.remove("collapsed");
}

shareCollapseBtn.addEventListener("click", handleHoldUpShareBtn);

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
