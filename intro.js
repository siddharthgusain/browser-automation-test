const puppeteer = require("puppeteer");
console.log("before");

let browserOpenpromise = puppeteer.launch();

browserOpenpromise.then(function (browser){
    console.log("openned");
});

console.log("after");