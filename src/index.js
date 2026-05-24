import { loadHome } from "./home.js";
import { loadAbout } from "./about.js";
import { loadMenu } from "./menu.js";

const content = document.getElementById("content");
const homeBtn = document.getElementById("homeBtn");
const aboutBtn = document.getElementById("aboutBtn");
const menuBtn = document.getElementById("menuBtn");

loadHome();

function removeTab() {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

homeBtn.addEventListener("click", () => {
  removeTab();
  loadHome();
});

aboutBtn.addEventListener("click", () => {
  removeTab();
  loadAbout();
});

menuBtn.addEventListener("click", () => {
  removeTab();
  loadMenu();
});
