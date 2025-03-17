let quateData;

async function getQuote() {
  quateData = await fetch("https://api.freeapi.app/api/v1/public/quotes/quote/random")
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

    const content =quateData.data.content;
    const tags = "#"+quateData.data.tags[0];
    const authorName = "- "+quateData.data.author.toString().toLowerCase();

    quote.innerHTML = `
        <div class="quote-content" id="content">
            ${content}
        </div>
        <div class="quote-footer"> 
            <div class="quate-tags" id="tags">
            ${tags}
            </div>
            <div class="quote-author" id="author">
            ${authorName}
            </div>
        </div>
    `;
}

const addBtn = document.querySelector(".add-btn");
addBtn.addEventListener("click",()=>{
    getQuote();
})

getQuote();
