//https://katalon-demo-cura.herokuapp.com/
// 1. On the make appointment. 
// 2. Next page, you are going to enter the username and password.
// 3. https://katalon-demo-cura.herokuapp.com/#appointment We need to verify that the URL is now changed to this. 
// The page contains make appointments. Make Appointment

import {test , expect} from '@playwright/test';

test('open cura website and login', async ({page}) => {

    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    //Click on the make appointment.
    let makeAppointment = page.locator('#btn-make-appointment');
    await makeAppointment.click();

    //Enter username and password
    let userName = page.locator("#txt-username");
    let passwordField = page.locator("#txt-password");
    let loginButton = page.locator("#btn-login");

    await userName.fill("John Doe");
    await passwordField.fill("ThisIsNotAPassword");
    await loginButton.click();

    // verify the Url and check for make appointment
     await expect(page).toHaveURL("https://katalon-demo-cura.herokuapp.com/#appointment");
    //let heading = page.locator(".text-center");
    //await expect(heading).toContainText('Make Appointment');


});
