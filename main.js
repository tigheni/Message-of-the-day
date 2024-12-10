async function fetchQuote() {
    const req = await fetch('https://api.quotable.io/random');
    const respond = await req.json();
    let { author, content } = respond;
    return { author, content };
}
const message = document.querySelector('#message');
const author = document.querySelector('.author');

async function displayQ() {
    const quote = await fetchQuote();
    message.innerHTML = `${quote.content}`;
    author.innerHTML = `${quote.author}`;
}
const changeQuote = document.querySelector('#changeQuote');
changeQuote.addEventListener('click', displayQ);
displayQ();
