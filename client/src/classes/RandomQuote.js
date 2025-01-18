import quotes from '../data/quotes.js';
import Quote from './Quote.js';
import MathUtils from '../utils/MathUtils.js';
import config from '../config.js';

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const {id, text, author} = quotes[randomIndex];

    return new Quote(id, text, author);
  }

  static async getRandomQuoteViaPublicAPI() {
    const url = `${config.PUBLIC_API_URL}/api/quotes/random`;
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
    const url = `${config.API_URL}/quotes/random-quote`;
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
