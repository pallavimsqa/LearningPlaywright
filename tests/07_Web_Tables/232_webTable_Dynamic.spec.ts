import {test, expect}from '@playwright/test';

test.describe('Dynamic Web Table Tests', () =>{

    test('test web table login - structurd extraction', async ({ page }) => {
        await page.goto("https://awesomeqa.com/webtable1.html");
        await page.waitForTimeout(3000);


        const rows =  page.locator('table[summary="Sample Table"] tbody tr');
        const rowsCount = await rows.count();
        console.log(rowsCount);

        for (let i=0; i<rowsCount; i++){
            const rowdata = await rows.nth(i).locator('td').allInnerTexts();
            console.log(`Row ${i+1}:`, rowdata);
        }
    }); 
});       