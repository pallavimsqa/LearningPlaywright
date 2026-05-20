//Practice single frame, multiple frame, multiple nested frames, 
// and frame within the frames from this, and add everything into the GitHub. 
//https://app.thetestingacademy.com/playwright/frames/

import{test, expect, FrameLocator, Locator}from '@playwright/test';

test.describe('Practice Frames', () =>{

    test('Single frame', async({page}) =>{

    await page.goto('https://app.thetestingacademy.com/playwright/frames/');
        
        let singleFrame = await page.frameLocator('#frame-one');
        await singleFrame.locator('#RESULT_TextField-1').fill('Breeza');
        await singleFrame.locator('#RESULT_TextField-2').fill('Pallavi');
        await singleFrame.locator('#RESULT_TextField-3').fill('Pallavi');
        await singleFrame.locator('#RESULT_RadioButton-1').selectOption('Sedan');
        await singleFrame.locator('#RESULT_TextField-4').fill('2018');
        await singleFrame.locator('#RESULT_TextArea-1').fill('Like the look and Gives good milage');
        await singleFrame.getByRole('button',{name:'Submit registration'}).click();

});

test('Multiple frame', async({page}) =>{

    await page.goto('https://app.thetestingacademy.com/playwright/frames/multi-frames');

    const mainframe =  page.frameLocator('[name = "main"]');
    const heading = await mainframe.locator('h2').innerText();
    console.log(`Main frame Heading:${heading}`);

    const sideFrame = page.frameLocator('[name = "side"]');
    const sideHeading = await sideFrame.locator('h3').allInnerTexts();
    console.log(`Side frame heading: ${sideHeading}`);
    const allElements = await sideFrame.locator('nav[aria-label="Side menu"]').innerText();
    console.log("Side Frame all elements:", allElements);
    await sideFrame.getByRole('link',{name : 'Vehicle registration'}).click();
    const vehicle_reg = await page.frameLocator('[name ="main"]').locator('div[data-testid="vehicle-registration-card"] h1').innerText();
    console.log(`Form label: ${vehicle_reg}`);
    
    const footerFrame = page.frameLocator('[name = "footer"]');
    const footerHeading = await footerFrame.locator("div.row").allInnerTexts();   
    console.log(`Footer heading: ${footerHeading}`);

});

   test('Multiple nested frame', async({page}) =>{

    await page.goto('https://app.thetestingacademy.com/playwright/frames/nested-iframes');

        let outerPage = await page.locator('#nested-iframes-card h3').textContent();
        console.log(outerPage);

        let frame1 = page.frameLocator('#pact1');
        let headingFrame1 = await frame1.locator('h4').innerText();
        console.log(headingFrame1);
        await frame1.locator('#inp_val').fill('TestNG');

        let frame2 = frame1.frameLocator('#pact2');
        let headingFrame2 = await frame2.locator('h4').innerText();
        console.log(headingFrame2);
        await frame2.locator('#jex').fill('BDD selenium');

        let frame3 = frame2.frameLocator('#pact3');
        let headingFrame3 = await frame3.locator('h4').innerText();
        console.log(headingFrame3);
        await frame3.locator('#glaf').fill('Java');

        await page.waitForTimeout(3000);
});

   test('Frame inside the frame', async({page}) =>{

    await page.goto('https://app.thetestingacademy.com/playwright/frames/courses-frameset');

       

        let mainframe = page.frameLocator('[name="main"]');
        let heading = await mainframe.locator('h2').innerText();
        console.log(heading);

        let navframe = page.frameLocator('[name="navbar"]');
        await page.waitForTimeout(3000);
        let navframeHeading = await navframe.locator('h3').innerText();
        console.log(navframeHeading);
        let navElements = await navframe.locator('nav a').allInnerTexts();
        console.log(navElements);
        await navframe.getByText('Home').click();

        let insideFrame = page.frameLocator('[name="content"]');
        let insideHeading = await insideFrame.locator('h1').innerText();
        console.log(insideHeading);

        await navframe.getByText('No frames').click();
        await page.goBack();
        await navframe.getByText('Sample').click();
        //let sampleheading = await insideFrame.locator('h1').innerText();
        //console.log(sampleheading);
        
        await navframe.getByText('Back to library').click();
        await page.goBack();

        let footerFrame = page.frameLocator('[name="bot"]');
        let footerHeading =  await footerFrame.locator('h2').innerText()
        console.log(footerHeading);

        
});


});