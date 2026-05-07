import {test, chromium} from '@playwright/test';
import path from 'path';

test.describe('Session Storage', () => {
    test('Save session to file', async () => {
        const browser = await chromium.launch({headless : false});
        const context = await browser.newContext();
        const page = await context.newPage();

        console.log("Navigating to login page...");
        await page.goto("https://app.vwo.com/#login");
        await page.waitForTimeout(2000);

        console.log("Filling login credentials...");
        await page.fill("#login-username","opg73@singleuseemail.site");
        await page.fill("#login-password", "Wingify@4321");

        console.log("Clicking login button...");
        await page.click("#js-login-btn");

        // Wait for login to actually complete before snapshotting storage
        console.log("Waiting for login to complete...");
        try {
            await page.waitForURL(/#\/(dashboard|home)/ , {timeout : 15000});
            console.log("✓ Login successful");
        } catch (error) {
            console.log("URL pattern not matched, checking current URL:", page.url());
        }
        
        await page.waitForTimeout(3000);

        const storagePath = path.resolve("./user-storage.json");
        console.log("Saving session to:", storagePath);
        await context.storageState({path : storagePath});
        console.log("✓ Session saved to user-storage.json");

        await browser.close();
    });
});
