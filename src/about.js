import serve from "./served.jpg";

export function loadAbout() {
  const content = document.getElementById("content");

  const introduction = document.createElement("h1");
  introduction.textContent = "Who are we?";
  content.appendChild(introduction);

  const information = document.createElement("p");
  information.textContent =
    "The krusty-krab is a restaurant who serve food to the people of the bikini bottom";
  content.appendChild(information);

  const serving = document.createElement("img");
  serving.src = serve;
  content.appendChild(serving);
}
