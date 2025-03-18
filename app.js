async function getQuote() {
  let quateData = await fetch("https://api.freeapi.app/api/v1/public/quotes/quote/random")
  .then((res) => {
    return res.json();
  })
  .catch((error)=>{
    alert("Error in fetching quote:");
  });
  setQuote(quateData);
}

function setQuote(quateData){
    const quote = document.querySelector(".quote");

    const content = quateData.data.content;
    const tags = "#"+quateData.data.tags[0];
    const authorName = "- " + quateData.data.author.toString().toLowerCase();

    quote.innerHTML = `
        <div class="quote-content" id="content">
        <img width="28" height="28" src="./images/open-quote.png" alt="quote-right"/>
            ${content}

        <img width="28" height="28" src="./images/close-quote.png" alt="quote-right"/>
        </div>
        <div class="quote-footer"> 
            <div class="left-footer">
              <div class="x-link">
                <a><img class="tweet" width="40" height="40" src="./images/x.png" alt="twitterx--v1"/></a>
              </div>
              <div class="quate-tags" id="tags">
                ${tags}
              </div>
            </div>
            <div class="quote-author" id="author">
            ${authorName}
            </div>
        </div>
    `;


  const tweet = document.querySelector(".tweet");
    tweet.addEventListener("click", function() {
      window.open("https://twitter.com/intent/tweet?text=" + content +"");      
    });
}

const addBtn = document.querySelector(".add-btn");
addBtn.addEventListener("click",()=>{
    getQuote();
})

getQuote();
