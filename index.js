#!/usr/bin/env node
var templateUrl = "https://codeload.github.com/LelesBox/rhythm-template/zip/master"
var argv = require('yargs').argv;
var shell = require("shelljs");

var path = "rhyme-template"
var name = process.argv[2];

shell.exec("echo download template");
shell.exec("wget " + templateUrl);
shell.exec("unzip master && rm master")
if (argv.name) {
    path = argv.name
}
shell.exec("mv rhyme-template-master " + path)
shell.exec("cd " + path + " && rm -rf .git && npm install")
shell.exec("echo done!")