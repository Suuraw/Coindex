import Configstore from "configstore";
import pkg from '../package.json' assert { type: "json" };
class KeyManager{
    constructor()
    {
        this.conf=new Configstore(pkg.name)
    }
    setKey(key){
        this.conf.set('apiKey',key)
        return key;
    }
    getKey(){
        const key=this.conf.get('apiKey');
        if(!key)
        {
            throw new Error('No API key found -Get a key at https://coinlayer.com/')
        }
        return key;
    }
    deleteKey(){
        const key=this.conf.get('apiKey');
        if(!key)
        {
            throw new Error('No API key found -Get a key at https://coinlayer.com/')
        }
        this.conf.delete('apiKey');
    }
}
export default KeyManager;