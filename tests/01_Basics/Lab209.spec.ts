// spec in the file name means playwright recognises that is the test file
import {test , expect} from '@playwright/test';
test ('Verify the title of the app.vwo.com', async ({page}) =>{

    await page.goto("https://app.vwo.com");
    await expect(page).toHaveTitle("Login - VWO");
    // running the code will done in the headless mode - fastest & browser not seen
    // for headed mode means browser visibility used --headed - slow 
})