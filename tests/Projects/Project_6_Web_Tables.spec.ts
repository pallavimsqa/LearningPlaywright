//open this - https://app.thetestingacademy.com/playwright/webtable
//Search the Kabir, Verify that it is visible and checkbox it also, verify the selected name appear
//upload to the github

import {test, expect}from '@playwright/test';

test('Search Kabir from web Table then click', async({page})=>{

    await page.goto("https://app.thetestingacademy.com/playwright/webtable");
    
    await page.locator("#employee-search").fill("Kabir");
    await page.locator("//td [text() = 'Kabir.Khan']/preceding-sibling::td").click();
    let expectedResult = await page.locator("div.selected-output").textContent();

    expect(expectedResult).toContain("Kabir.Khan");
    await page.waitForTimeout(3000);
    



});