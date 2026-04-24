import {test, expect}from '@playwright/test';

test("simple goto - uses load by default", async({page}) => {

    //no waituntill specified - uses default one as "load"
    await page.goto("https://app.vwo.com");

    let title = await page.title();
    console.log("Title : ", title);

    await expect(page).toHaveTitle("Login - VWO");
    console.log("URL verified");

});
