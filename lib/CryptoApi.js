import axios from "axios";
import "colors";
class CryptoApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "http://api.coinlayer.com/";
  }
  async getPriceData(coinOption, curOption) {
    try {
    //   Formatter to format the currency
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: curOption,
    })
    const res = await axios.get(`${this.baseUrl}live?access_key=${this.apiKey}&symbols=${coinOption}&expand=1&target=${curOption}`);
    let output = '';

    
    Object.entries(res.data.rates).forEach(([coin, data]) => {
        const { rate, high, low, vol, cap, sup, change, change_pct } = data;

        output += `Coin: ${coin.yellow}\n`;
        output += `  Price: ${rate ? formatter.format(rate).green : 'N/A'.red}\n`;
        output += `  High: ${high ? formatter.format(high).green : 'N/A'.red}\n`;
        output += `  Low: ${low ? formatter.format(low).red : 'N/A'.red}\n`;
        output += `  Volume: ${vol !== null ? vol.toString().blue : 'N/A'.red}\n`;
        output += `  Market Cap: ${cap !== null ? formatter.format(cap).cyan : 'N/A'.red}\n`;
        output += `  Supply: ${sup !== null ? sup.toString().yellow : 'N/A'.red}\n`;
        output += `  Change: ${change ? formatter.format(change).green : 'N/A'.red}\n`;
        output += `  Change (%): ${change_pct ? change_pct.toString().green : 'N/A'.red}\n\n`;
    });
      return output;
    } catch (err) {
      handleAPIerror(err);
    }
  }
}
function handleAPIerror(err) {
  if (err.response.status === 401) {
    throw new Error(
      "Your API key is invalid - Go to --http://api.coinlayer.com/"
    );
  } else if (err.response.status === 404) {
    throw new Error("Your API key is not responding");
  } else {
    throw new Error("Something went Wrong");
  }
}
export default CryptoApi;
