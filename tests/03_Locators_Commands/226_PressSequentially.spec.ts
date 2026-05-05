import {test,expect} from '@playwright/test';

test('CSS advanced locators',async({page}) => {

await page.goto("https://awesomeqa.com/practice.html");
await page.locator('[name= "firstname"]').pressSequentially("the testing Academy",{delay :200});

await page.waitForTimeout(1000);

await page.goto("https://app.vwo.com/#/login");
await page.waitForTimeout(3000);
await page.goBack();
await page.reload();
await page.waitForTimeout(3000);






});