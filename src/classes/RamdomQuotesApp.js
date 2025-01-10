import RandomQuote from './RandomQuote.js';

class RandomQuotesApp {
  constructor() {
    this.randomQuoteBtn = document.getElementById('random-quote-btn');
    this.quoteTextElement = document.getElementById('quote-text');
    this.quoteAuthorElement = document.getElementById('quote-author');
    this.currenQuote = null;

    this.init();
  }

  displayCurrentQuote() {
    this.quoteTextElement.textContent = this.currenQuote.formatText();
    this.quoteAuthorElement.textContent = this.currenQuote.formaAuthor();
  }

  getRandomQuote() {
    const randomQuote = RandomQuote.getRandomQuote();

    this.currenQuote = randomQuote;
    this.displayCurrentQuote();
  }

  init() {
    this.randomQuoteBtn.addEventListener('click', () => this.getRandomQuote());
  }
}

export default RandomQuotesApp;
