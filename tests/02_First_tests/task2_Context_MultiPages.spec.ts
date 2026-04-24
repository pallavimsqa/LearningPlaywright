import {test, expect} from '@playwright/test';


test("Same Context with multiple pages", async ({browser}) => {

    const context = await browser.newContext();

    // Page 1
    let adminPage = await context.newPage();
    await adminPage.goto("https://app.vwo.com");
    console.log("AdminPage title: ", await adminPage.title());


    // Page 2
    let userPage = await context.newPage();
    await userPage.goto("https://app.vwo.com");
    console.log("UserPage title: ", await userPage.url());

    
    // Page 3
    let viewerPage = await context.newPage();
    await viewerPage.goto("https://app.vwo.com");
    console.log("ViewerPage title: ", await viewerPage.title());

    await context.close();


});