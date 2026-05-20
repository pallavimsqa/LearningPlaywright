// test.describe -  is basically used for grouping the number of test cases together

import {test, expect}from '@playwright/test';

test.describe('Multiple elements Handling',()=>{

    test('Basic test - Verify page Title', async({page}) => {
        await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

        const rightPanelLinksTexts: string[] = await page.locator('a.list-group-item').allInnerTexts();
        console.log(rightPanelLinksTexts.length);
        
        for (const linkText of rightPanelLinksTexts){
            if(linkText === 'My Account'){
                await page.getByText(linkText).first().click();
                break;
            }
        }

        const rightPanelLinks = await page.locator('a.list-group-item').all();
        for (const link of rightPanelLinks){
            console.log(await link.getAttribute('href'));
        }
    });

});
