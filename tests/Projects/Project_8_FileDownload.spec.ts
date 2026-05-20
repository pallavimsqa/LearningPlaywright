import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('File Download Demo', () => {

    test('Download file using waitForEvent', async ({ page }) => {
        
        await page.goto('https://app.thetestingacademy.com/playwright');

        // Wait for download event and handle the file
        const downloadPromise = page.waitForEvent('download');
        
        // Trigger download action (update selector as needed for actual element)
        // await page.click('a[href*="download"]');
        
        const download = await downloadPromise;
        
        // Get file name
        console.log(`Downloaded file: ${download.suggestedFilename()}`);
        
        // Save file to a specific path
        const filePath = path.join('downloads', download.suggestedFilename());
        await download.saveAs(filePath);
        
        console.log(`File saved at: ${filePath}`);
    });

    test('Download file and validate', async ({ page }) => {
        
        await page.goto('https://app.thetestingacademy.com/playwright');

        // Listen for download event
        const downloadPromise = page.waitForEvent('download');
        
        // Trigger the download action
        // await page.click('button:has-text("Download")');
        
        const download = await downloadPromise;
        
        // Validate download properties
        expect(download.suggestedFilename()).toBeTruthy();
        console.log(`File name: ${download.suggestedFilename()}`);
        
        // Save file
        const filePath = path.join('test-downloads', download.suggestedFilename());
        await download.saveAs(filePath);
    });

    test('Download multiple files', async ({ page }) => {
        
        await page.goto('https://app.thetestingacademy.com/playwright');

        // Download multiple files
        const downloads = [];
        
        // Setup listeners for multiple downloads
        page.on('download', async (download) => {
            console.log(`File downloading: ${download.suggestedFilename()}`);
            downloads.push(download);
        });

        // Trigger downloads (update as needed)
        // await page.click('button:has-text("Download All")');
        
        // Wait for downloads to complete
        await page.waitForTimeout(2000);
        
        console.log(`Total files downloaded: ${downloads.length}`);
    });

});
