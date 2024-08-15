import { Command } from "commander";
import key from "../commands/key.js";

const program=new Command();
program
.command('set')
.description('Set the API key --https://coinlayer.com/')
.action(key.set)

program
.command('show')
.description('Show the API key --https://coinlayer.com/')
.action(key.show)

program
.command('delete')
.description('Delete the API key --https://coinlayer.com/')
.action(key.delete)
program.parse(process.argv);