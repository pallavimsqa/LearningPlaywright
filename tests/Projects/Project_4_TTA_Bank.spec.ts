//Load the solution to GitHub as a project. 
// Make sure you add the custom reporter also, which I have given you by using here. 
// Please create a readme file with the screenshots with custom reporter that you are able to verify as well. 

//TTA Bank- https://tta-bank-digital-973242068062.us-west1.run.app/
//1. Signup button click, then enter username and password then click create account
//2. Go to transfer fund then enter amount($5000) and note field then click continue
//3. then click on Confirm Transfer and go back to Dashboard and verify the amount reduced


import {test , expect}from '@playwright/test';

test('Verify the transfer done in TTA Bank' , async({page}) =>{

    console.log("Sucessfully signedup TTA Bank");
    await page.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");
    await page.getByRole('button', {name : 'Sign Up'}).click();
    await page.getByPlaceholder('John Doe').fill('Pallavi');
    await page.getByPlaceholder('you@example.com').fill('pallavi@abc.com');
    await page.getByPlaceholder('••••••••').fill('pallavi123');
    await page.getByRole('button', {name : 'Create Account'}).click();
    console.log("Sucessfully logged In & Dashborad page loaded");

    await page.waitForTimeout(500);

    console.log("Tranfered $5000 successfully");
    await page.getByRole('button', {name : 'Transfer Funds'}).click();
    await page.getByPlaceholder('0.00').fill('5000');
    await page.getByPlaceholder('e.g. Rent for October').fill('Rent');
    await page.getByRole('button', {name : 'Continue'}).click();
    await page.getByRole('button', {name : 'Confirm Transfer'}).click();
    await page.waitForTimeout(5000);
    await page.getByRole('button', {name : 'Dashboard'}).click();
    await page.waitForTimeout(500);
    let total_balance  = page.getByRole('heading',{name : '$45,000.00'});
    await page.waitForTimeout(5000);
    await expect(total_balance).toHaveText("$45,000.00");
    await page.waitForTimeout(500);

});
