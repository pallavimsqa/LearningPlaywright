//You need to go to https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage 
// and for the incorrect Gmail ID, verify that the message will come.
// check the box and click on Create a Free Trail Account 

import{test, expect}from '@playwright/test';

test("Go to VWO.com free-Trail and check for error msg", async({page}) => {
    await page.goto("https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage");
    await page.getByRole('textbox' , {name : 'email'}).fill("asgsafta@gmail.com");
    await page.locator('#page-free-trial-step1-cu-gdpr-consent-checkbox').check();
    await page.getByRole('button', {name : 'Create a Free Trial Account'}).click();
    await page.waitForTimeout(3000);

   let error_msg = await page.locator('div[class*="invalid-reason"]').getByText("gmail.com doesn't look like a business domain. Please use your business email");
    expect(error_msg).toHaveText("gmail.com doesn't look like a business domain. Please use your business email.");

});