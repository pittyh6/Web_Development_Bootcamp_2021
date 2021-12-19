//jshint esversion:6

// import fs from "fs";
const fs = require("fs");
// copy the content inside file1.txt and create a new file call file2.txt
fs.copyFileSync("file1.txt", "file2.txt")

const superheroes = require("superheroes")
const supervillains = require("supervillains")

var super_heroes_name = superheroes.random();
console.log("my superhero is " + super_heroes_name);

var super_villan_name = supervillains.random();
console.log("The super villan " + super_villan_name + " is here...");