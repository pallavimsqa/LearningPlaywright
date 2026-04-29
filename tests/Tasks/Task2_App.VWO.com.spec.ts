import {test,expect}from '@playwright/test';

test('Automate App.VWO.com using getByRole' ,  async({page}) => {
    await page.goto("https://app.vwo.com/#/login");

    await page.getByRole('textbox' , {name : 'email'}).fill('example.com');
    await page.getByRole('textbox' , {name : 'password'}).fill('test12345');
    await page.getByRole("button" , {name : "Sign in" , exact : true}).click();
    let error_msg = page.locator('#js-notification-box-msg');
    await expect(error_msg).toHaveText('Your email, password, IP address or location did not match');


});
