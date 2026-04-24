import {test , expect} from '@playwright/test';

test("goto with different waituntill options" , async ({page}) => {

    // commit - HTML is not yet parsed, to check HTTp response
    await page.goto("https://app.vwo.com", { waitUntil :"commit"}); 
    console.log("commit: server responded");

    // documentLoaded - Wait for HTML to be parsed and DOM tree is created
    await page.goto("https://app.vwo.com", { waitUntil :"domcontentloaded"}); 
    console.log("domcontent loaded: HTML parsed");

    // load - wait for everything (images, CSS, scripts) , this is default
    await page.goto("https://app.vwo.com", { waitUntil :"load"}); 
    console.log("load: all resources loaded");

    //networkidle - slowest one, wait for all network activity to stop
    await page.goto("https://app.vwo.com", { waitUntil :"networkidle"}); 
    console.log("networkidle: no request for 500ms");


});