import {test, expect} from '@playwright/test';

test('One browser with multiple context and pages', async ({browser}) => {

    // context1 with multiple pages
    let context1 = await browser.newContext();
    let page1 = await context1.newPage();
    let page2 = await context1.newPage();
    let page3 = await context1.newPage();

    await page1.goto("https://app.vwo.com");
    await page2.goto("https://app.vwo.com/#login");
    await page3.goto("https://app.vwo.com/#home");

    console.log("Page1 URL:", page1.url());
    console.log("Page2 URL:", page2.url());
    console.log("Page3 URL:", page3.url());

    await context1.close();

    // context2 with multiple pages
     let context2 = await browser.newContext();
    let page4 = await context2.newPage();
    let page5 = await context2.newPage();
    let page6 = await context2.newPage();

    await page4.goto("https://katalon-demo-cura.herokuapp.com/");
    await page5.goto("https://katalon-demo-cura.herokuapp.com/#login");
    await page6.goto("https://katalon-demo-cura.herokuapp.com/#home");

    console.log("Page4 URL:", page4.url());
    console.log("Page5 URL:", page5.url());
    console.log("Page6 URL:", page6.url());

     await context2.close();

});