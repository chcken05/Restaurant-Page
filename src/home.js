import restaurant from "./krusty-krab.png";
import "./home.css";

export function loadHome() {
  const content = document.getElementById("content");

  const greetings = document.createElement("h1");
  greetings.textContent = "Welcome to Krusty Krab";
  greetings.classList.add("greetings");
  content.appendChild(greetings);

  const image = document.createElement("img");
  image.src = restaurant;
  content.appendChild(image);

  const text = document.createElement("p");
  text.textContent = "My restaurant is wonderful";
  content.appendChild(text);
}
