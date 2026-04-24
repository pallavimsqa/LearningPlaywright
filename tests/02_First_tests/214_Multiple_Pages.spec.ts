import {Browser, chromium} from 'playwright';

async function multiTabTest(){
let browser = await chromium.launch({headless :false});
let context = await browser.newContext();

// tab1/page1
let page1 = await context.newPage();
await page1.goto("https://app.vwo.com/#login");
console.log("Tab1 : login");

// Tab1/page2
let page2 = await context.newPage();
await page2.goto("https://app.vwo.com/#dashboard");
console.log("Tab2 : Dashboard");

}

multiTabTest();
