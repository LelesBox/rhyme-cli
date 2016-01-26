#!/usr/bin/env node
//预计完成的功能 rhyme gen or rhyme duang --name test
var templateUrl = "https://codeload.github.com/LelesBox/rhyme-template/zip/master"
var argv = require('yargs').argv;
var path = "rhyme-template"
var name = process.argv[2];
var shell = require("shelljs");

shell.exec("echo download template");
shell.exec("wget " + templateUrl);
shell.exec("unzip master && rm master")
if (argv.name) {
    path = argv.name
}
shell.exec("mv rhyme-template-master " + path)
shell.exec("cd " + path + " && rm -rf .git && npm install")
shell.exec("echo done!")