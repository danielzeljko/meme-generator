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

  createMeme(url, textTop, textBot);
  form.reset();
}

function createMeme(url, text1, text2) {
  const card = document.createElement("div");
  card.classList = "card";

  const img = document.createElement("img");
  img.src = url;

  const textTop = document.createElement("p");
  textTop.classList = "fixed fixed-top";
  textTop.textContent = text1;

  const textBot = document.createElement("p");
  textBot.classList = "fixed fixed-bot";
  textBot.textContent = text2;

  card.appendChild(img);
  card.appendChild(textTop);
  card.appendChild(textBot);

  results.appendChild(card);
}