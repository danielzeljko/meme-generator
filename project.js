"use strict";

const form = document.getElementById("my-form");
form.addEventListener("submit", submitHandler);

/** Handles the form submission */
function submitHandler(evt) {
  evt.preventDefault();
  const url = form.querySelector("input[id='image-url']").value;
  const textTop = form.querySelector("input[id='top-text']").value;
  const textBot = form.querySelector("input[id='bot-text']").value;

  if (textTop.trim() === "" && textBot.trim() === "") {
    alert("You can't create an empty meme. A meme needs some text.");
    return;
  }

  if (url.trim() === "") {
    alert("An image is required to make a meme.");
    return;
  }

  createMeme(url, textTop, textBot);
  form.reset();
}

/** Handles the meme deletion */
function handleDeleteButton(evt) {
  const cardId = evt.target.dataset.id;
  const card = document.querySelector(`div[data-id="${cardId}"]`);
  card.remove();
}

/** Appends the generated meme to div #results
 *
 * url: image url
 * text1: text on top of the image
 * text2: text on bottom of the image
 */
function createMeme(url, text1, text2) {
  const cardId = Math.random();

  const img = document.createElement("img");
  img.src = url;

  const textTop = document.createElement("p");
  textTop.classList = "fixed fixed-top";
  textTop.textContent = text1;

  const textBot = document.createElement("p");
  textBot.classList = "fixed fixed-bot";
  textBot.textContent = text2;

  const cardBody = document.createElement("div");
  cardBody.classList = "card-body";
  cardBody.appendChild(img);
  cardBody.appendChild(textTop);
  cardBody.appendChild(textBot);

  const card = document.createElement("div");
  card.classList = "card";
  card.setAttribute("data-id", cardId);
  card.appendChild(cardBody);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.setAttribute("data-id", cardId);
  deleteBtn.addEventListener("click", handleDeleteButton);

  const cardFooter = document.createElement("div");
  cardFooter.classList = "card-footer";
  cardFooter.appendChild(deleteBtn);
  card.appendChild(cardFooter);

  const results = document.getElementById("results");
  results.appendChild(card);
}