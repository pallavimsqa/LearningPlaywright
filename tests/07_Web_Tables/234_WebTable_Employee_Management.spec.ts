import{test,expect}from '@playwright/test';

test.describe('Employee management web table', () =>{

    test('Employee management web table with checkbox', async({page}) =>{

        await page.goto("https://app.thetestingacademy.com/playwright/webtable");
        //page.locator('//table[@aria-label="Employee Management System table"]/tbody/tr');
        //await page.locator('//td[text() ="Rohan.Mehta"]/preceding-sibling::td').click();

        await page
        .locator('tr:has(td:text("Rohan.Mehta"))')
        .locator("td")
        .first()
        .click();

        await page.waitForTimeout(3000);

    });
});
