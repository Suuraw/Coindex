import KeyManager from "../lib/KeyManager.js";
import CryptoApi from "../lib/CryptoApi.js";
const check = {
  async price(cmd) {
    try {
        const keyManger=new KeyManager();
        const key=keyManger.getKey();
        const api=new CryptoApi(key);
        const  priceOutputData=await api.getPriceData(cmd.coin,cmd.cur)
        console.log(priceOutputData);
    } catch (error) {
        
    }
  },
};
export default check;