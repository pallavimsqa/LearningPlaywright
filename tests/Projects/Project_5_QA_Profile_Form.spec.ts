//https://app.thetestingacademy.com/playwright/tables/practice
//Complete the QA profile with whatever elements you know and
//  add a grid hub profile as well as a screenshot also. 

import {test, expect}from '@playwright/test';

test.describe('Complete the QA profile', () =>{

    test('Fill the QA profile form', async ({page}) => {
        
        await page.goto("https://app.thetestingacademy.com/playwright/tables/practice");
        await page.locator('#first-name').fill("Pallavi");
        await page.locator('#last-name').fill("M S");
        await page.locator('[data-testid="gender-female"]').check();
        await page.locator('#years-experience').selectOption("7");
        await page.locator('[data-testid="profession-automation"]').check();
        await page.locator('[data-testid="tool-selenium"]').check();
        await page.locator('[data-testid="continent-asia"]').check();
        await page.locator('[data-testid="tab-webelement"]').click();
        await page.locator('[data-testid="profile-submit"]').click();
        await page.waitForTimeout(3000);


    });

});
