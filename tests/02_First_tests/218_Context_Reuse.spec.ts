// reusing context across tests

import {test} from '@playwright/test';
test.describe('shared context test' , () =>{
    test.use({
        viewport: { width: 1280, height: 720 },
        locale: 'en-US',
    });

    test('test1', async ({page}) => {
        await page.goto("https://app.vwo.com/#login");
    });

    test('test2', async ({page}) => {
        await page.goto("https://app.vwo.com/#login");
    });
    
});