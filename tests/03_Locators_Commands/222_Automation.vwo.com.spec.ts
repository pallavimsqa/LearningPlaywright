import {test , expect }from '@playwright/test';

test("locators are lazy, strict, and auto-wait",async({page}) =>{ 
      await page.goto("https://app.vwo.com/#login");



});
