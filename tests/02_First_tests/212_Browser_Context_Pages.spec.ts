// when want to use playwright then import only playwright
// to lunch the browser, contexts and pages
import {chromium , Browser, BrowserContext, Page}from 'playwright';

// normal function 
async function run(){
    // LEVEL1: Launch browser - heaviest operation, do it one
    let browser : Browser = await chromium.launch({headless: false});
    console.log("Browser Launched", browser);

    //Level2: create context - fresh session, isolated cookies
    let context : BrowserContext = await browser.newContext();
    console.log("Context Created", context);

    //Level3: Open page - a tab inside the context
    let page: Page = await context.newPage();
    console.log("Page opened", page);

    await page.goto("https://app.vwo.com");
    console.log("Title:", await page.title());

    // Cleanup -  reverse order

    await page.close();
    await context.close();
    await browser.close();
    
}

run();
