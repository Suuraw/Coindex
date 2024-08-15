import inquirer from "inquirer";
import KeyManager from "../lib/KeyManager.js";
import isRequired from "../util/validation.js";
import "colors";
const key = {
  async set() {
    const keyManger = new KeyManager();
    const input = await inquirer.prompt([
      {
        type: "input",
        name: "key",
        message: "Enter The API Key".green + "https://coinlayer.com/",
        validate: isRequired,
      },
    ]);
    const key = keyManger.setKey(input.key);
    if (key) {
      console.log("API Key Set".blue);
    }
  },
  show() {
    try {
      const keyManger = new KeyManager();
      const key = keyManger.getKey();
      console.log("Current API key ", key.yellow);
    } catch (err) {
        console.log(err.message.red);
    }
  },
  delete() {
    try {
        const keyManger = new KeyManager();
        keyManger.deleteKey();
        console.log(" API key removed ".blue);
      } catch (err) {
          console.log(err.message.red);
      }
  },
};
export default key;
