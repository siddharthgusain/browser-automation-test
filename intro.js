const puppeteer = require("puppeteer");
let page;
console.log("before");

const browserOpenpromise = puppeteer.launch({ headless : false });

 let pageArrpromise  = browserOpenpromise.then(function (browser){

   const pageOpen =  browser.pages();
   
   return pageOpen;
});

pageArrpromise
    .then(function(browserpages){
    page  = browserpages[0];
     page.goto("https://www.google.com/");
});

console.log("after");