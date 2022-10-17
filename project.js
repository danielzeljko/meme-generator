"use strict";

const results = document.getElementById("results");
document.getElementById("image-url").defaultValue = " https://s36537.pcdn.co/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg.optimal.jpg ";

const form = document.getElementById("my-form");
form.addEventListener("submit", submitHandler);

function submitHandler(evt) {
  evt.preventDefault();
  const url = form.querySelector("input[id='image-url']").value;
  const textTop = form.querySelector("input[id='top-text']").value;
  const textBot = form.querySelector("input[id='bot-text']").value;

  if(textTop.trim() === "" && textBot.trim() === "" ){
    alert("You can't create an empty meme. A meme needs some text.")
    return;
  }

  if(url.trim() === ""){
    alert("An image is required to make a meme.")
    return;
  }

  createMeme(url, textTop, textBot);
  form.reset();
}

function handleDeleteButton(evt) {
  const cardId = evt.target.dataset.id;
  const card = document.querySelector(`div[data-id="${cardId}"]`);
  card.remove()
}

function createMeme(url, text1, text2) {
  const cardId = Math.random();

  const card = document.createElement("div");
  card.classList = "card";
  card.setAttribute("data-id", cardId);

  const cardBody = document.createElement("div");
  cardBody.classList = "card-body";

  const cardFooter = document.createElement("div");
  cardFooter.classList = "card-footer";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.setAttribute("data-id", cardId)
  deleteBtn.addEventListener("click", handleDeleteButton);

  const img = document.createElement("img");
  img.src = url;

  const textTop = document.createElement("p");
  textTop.classList = "fixed fixed-top";
  textTop.textContent = text1;

  const textBot = document.createElement("p");
  textBot.classList = "fixed fixed-bot";
  textBot.textContent = text2;

  cardBody.appendChild(img);
  cardBody.appendChild(textTop);
  cardBody.appendChild(textBot);
  card.appendChild(cardBody);

  cardFooter.appendChild(deleteBtn);
  card.appendChild(cardFooter);

  results.appendChild(card);
}