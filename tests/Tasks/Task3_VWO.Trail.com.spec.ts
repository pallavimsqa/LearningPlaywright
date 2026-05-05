//You need to go to https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage 
// and for the incorrect Gmail ID, verify that the message will come.
// check the box and click on Create a Free Trail Account 

import{test, expect}from '@playwright/test';

test("Go to VWO.com free-Trail and check for error msg", async({page}) => {
    await page.goto("https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage");
    await page.getByRole('textbox' , {name : 'email'}).fill("asgsafta@gsd.com");
    let error_msg = page.locator("")


})