// rarely used referer - what was the previous url - security purpose
//  if you load app.vwo.com or the second website, 
// which is our cura.catalone website, which are our two testing websites,
//  right? I want this to be available. The referral should be testingacademy.com.


import {test }from '@playwright/test';

test("set referer for entire context",async({browser}) =>{

    let context = await browser.newContext({
        extraHTTPHeaders: {
            "Referer": "https://thetestingacademy.com"
        }
    });

    let page = await context.newPage();
    await page.goto('https://app.vwo.com/#login');
    console.log("Page VWO — partner referer included");

    let page1 = await context.newPage();
    await page1.goto('https://katalon-demo-cura.herokuapp.com/profile.php#login');
    console.log("Page1 Cura — partner referer included");


});