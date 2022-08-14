const quote = document.querySelector(".quote");
const button = document.getElementById("button");
const author = document.querySelector(".author");


const twitterBtn = document.getElementById("twitter");
const speechBtn = document.getElementById("speech");
const clipBoardBtn = document.getElementById("copy");


function moreRandomQuotes() {
  button.innerText = "Loading quote...";

  fetch("https://api.quotable.io/random").then(res => res.json()).then(randomQuote => {
  quote.innerText = randomQuote.content;
  author.innerText = randomQuote.author;
  button.innerText = "More Quotes";
  });
};


clipBoardBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(quote.innerText)
})


speechBtn.addEventListener("click", () => {
  const vocal = new SpeechSynthesisUtterance(`${quote.innerText} by ${author.innerText}.`);
  speechSynthesis.speak(vocal);
});



twitterBtn.addEventListener("click", () => {
  let twitterLink = `https://twitter.com/intent/tweet?url=${quote.innerText}`;
  window.open(twitterLink, "_blank");
});


button.addEventListener("click", moreRandomQuotes);