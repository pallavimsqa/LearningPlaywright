// Handle SVG elements with Playwright (TypeScript)
// ------------------------------------------------
// SVG nodes live in the SVG namespace, not HTML.
// CSS selectors work fine. XPath needs name() / local-name() because
// tag names are namespaced (e.g. svg:path).
// Common patterns: locate SVG, locate child shapes (path/rect/circle/g),
// click, hover, read attributes (d, fill, viewBox, stroke), assert state.

import{test, expect, locator} from '@playwright/test';

const URL = 'https://www.flipkart.com/search'; // replace with target page 

test.describe('SVG Handling', () =>{

 test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('Locate SVG root and assert visible', async({page}) =>{

        await page.locator('input[name:"q"]').fill('macmini');
        //await page.getByTitle('Search for products, brands and more').fill('macmini');

        const svgElements: locator = page.locator('svg');
        await svgElements.first().click();
        
    });

});