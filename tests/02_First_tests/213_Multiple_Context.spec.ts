// login as 2 different user at the same time

import{chromium} from 'playwright';


async function multipleUser(){

// launch the browser
let browser = await chromium.launch({headless: false});

// login as admin
let adminContext = await browser.newContext();
let adminPage = await adminContext.newPage();
await adminPage.goto("https://app.vwo.com");
console.log("login as admin");

// login as Viewer
let viewerContext = await browser.newContext();
let viewerPage = await viewerContext.newPage();
await viewerPage.goto("https://app.vwo.com/login");
console.log("logim as viewer");

await adminContext.close();
await viewerContext.close();
await browser.close();

}

multipleUser();
