import krabby from "./krabby-patty.png";
import fries from "./kelp-fires.png";
import drink from "./kelp-drink.png";

export function loadMenu() {
  const content = document.getElementById("content");

  const greetings = document.createElement("h1");
  greetings.textContent = "Here's our menu";
  content.appendChild(greetings);

  //   krabby patty
  const div1 = document.createElement("div");
  div1.classList.add("krabby-patty");
  content.appendChild(div1);

  const header1 = document.createElement("h3");
  header1.textContent = "Delicious krabby-patty";
  const img1 = document.createElement("img");
  img1.src = krabby;
  div1.append(header1, img1);

  //   kelp fries
  const div2 = document.createElement("div");
  div2.classList.add("kelp-fries");
  content.appendChild(div2);

  const header2 = document.createElement("h3");
  header2.textContent = "A kelp fries-shaped";
  const img2 = document.createElement("img");
  img2.src = fries;
  div2.append(header2, img2);

  //   kelp drink
  const div3 = document.createElement("div");
  div3.classList.add("kelp-drink");
  content.appendChild(div3);

  const header3 = document.createElement("h3");
  header3.textContent = "Refreshing!";
  const img3 = document.createElement("img");
  img3.src = drink;
  div3.append(header3, img3);
}
