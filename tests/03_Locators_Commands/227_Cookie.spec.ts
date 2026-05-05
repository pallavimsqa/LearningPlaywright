import { test, expect } from '@playwright/test';

test("locators are lazy, strict, and auto-wait", async ({page, context}) => {
    await page.goto("https://app.vwo.com/#login");

    // Read all cookies
    let cookies = context.cookies();
     console.log("Total cookies:", (await cookies).length);

     await context.addCookies([
        {
            name: "vwo",
            value: "eyJ1c2VySWQiOiIxNzExNTQzIiwiYWNjb3VudElkIjoiMTIyNzAwNyIsInRva2VuIjoiME9qdGNmNGJtNGhsV2R4UGFyVzQwdXJpeEpYMXdDdlUzd3VWb1dESGZoZWw3UmxSZ1pIbjVjZ2I0VldkelNQRTYyYi1wLThrVktOSzJTeWl4UVRMNVEiLCJ2YWxpZGl0eSI6IjcyMDAiLCJ2ZXJzaW9uIjoxLCJoYXNoIjoiYTI0MWI3ZDZkN2FhZjk0MDQxMDZmYzE3MzA1MGE4OTRiNzRlM2ZkZCJ9",
            domain: "app.vwo.com",
            path: "/"
        },
        {
            name: "user_role",
            value: "admin",
            domain: "app.com",
            path: "/"
        
        }
     ]);

})