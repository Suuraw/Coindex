#!/usr/bin/env node
import { Command } from "commander";
import pkg from '../package.json' assert { type: "json" };

const program=new Command();
program
.version(pkg.version)
.command('key','Manage API key --https://coinlayer.com/')//top level commands
.command('check','Check the Coin Info')//top level commands

.parse(process.argv)
