import {test,expect} from '@playwright/test';

// load saved session - already logged in
test.use({
    storageState: "./user-session.json"
});

test('go directly to  dashboard' , async({page}) =>{
    await page.goto("https://app.vwo.com/#/dashboard/get-started?accountId=1227004");
    await expect(page).toHaveTitle(/dashboard/);
    console.log("Dashboard loaded - no login needed");
    await page.waitForTimeout(3000);
    
});

test('go directly to  settings' , async({page}) =>{
    await page.goto("https://app.vwo.com/#/settings/accounts/general?accountId=1227007");
    await expect(page).toHaveTitle(/setting/);
    console.log("Setting loaded -still logged In");
    await page.waitForTimeout(3000);
    
});