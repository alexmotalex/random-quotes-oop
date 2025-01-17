import quotes from '../data/quotes.js';
import Quote from './Quote.js';
import MathUtils from '../utils/MathUtils.js';

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const {id, text, author} = quotes[randomIndex];

    return new Quote(id, text, author);
  }

  static async getRandomQuoteViaPublicAPI() {
    const url = 'https://quoteslate.vercel.app/api/quotes/random';
    const options = {headers: {'Content-Type': 'application/json'}};

    try {
      const response = await fetch(url, options);
      const {id, quote, author} = await response.json();

      return new Quote(id, quote, author);
    } catch (error) {
      console.error(error);
    }
  }

  static async getRandomQuoteViaOwnAPI() {
    const url = 'http://127.0.0.1:3000/quotes/random-quote';
    const options = {headers: {'Content-Type': 'application/json'}};

    try {
      const response = await fetch(url, options);
      const {id, text, author} = await response.json();

      return new Quote(id, text, author);
    } catch (error) {
      console.error(error);
    }
  }
}

export default RandomQuote;
