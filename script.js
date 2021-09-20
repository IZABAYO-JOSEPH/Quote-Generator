const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

// using let allows us to be able to modify our variable
let apiQuotes = [];

// show loading
// when a loader is loading we only gonna see the loader and nothing else
function showLoadingSpinner() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

//  hide loader
function removeLoadingSpinner() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}
function newQuote() {
  showLoadingSpinner();
  // pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  // check if author field is blank and replace it with unkown
  if (!quote.author) {
    authorText.textContent = "unkown";
  } else {
    authorText.textContent = quote.author;
  }
  // check quote length to determine the styling
  //   if (quote.Text.length > 50) {
  //     quoteText.classList.add("long-quote");
  //   } else {
  //     quoteText.classList.remove("long-quote");
  //   }
  // set quote and hide the loader
  quoteText.textContent = quote.text;
  removeLoadingSpinner();
}
// get quotes API
//  async function can run at anytime independently and it wont' stop the browser from loading the page
async function getQuotes() {
  showLoadingSpinner();
  const apiUrl = "https://type.fit/api/quotes";
  try {
    // this means the response constant will not be populated until it has fetched the data
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    // catch error here
  }
}

// tweet a quote

function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  // allows us to open a new window using twitter url in a new tab
  window.open(twitterUrl, "_blank");
}
// eventListeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

// on load / as soon as the page loads
getQuotes();
