const quote = document.querySelector(".quote");
const button = document.getElementById("button");
const author = document.querySelector(".author");



button.addEventListener("click", moreRandomQuotes);

function moreRandomQuotes() {
    
   fetch("https://api.quotable.io/random").then(res => res.json()).then(randomQuote => {
       console.log(randomQuote)
       
   quote.innerText = randomQuote.content;
   author.innerText = randomQuote.author;

   });
}

function copy() {
 var copyText = document.querySelector(".quote").innerText;
  copyText.select();
  document.execCommand("copy");
}

document.querySelector("#copy").addEventListener("click", copy);