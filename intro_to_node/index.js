//jshint esversion:6

// import fs from "fs";
const fs = require("fs");

// copy the content inside file1.txt and create a new file call file2.txt
fs.copyFileSync("file1.txt", "file2.txt")