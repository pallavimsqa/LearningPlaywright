# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Projects\Project_4_TTA_Bank.spec.ts >> Verify the transfer done in TTA Bank
- Location: tests\Projects\Project_4_TTA_Bank.spec.ts:13:5

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected pattern: /Transfer Funds/
Received string:  "TTA Bank - Digital Banking"
Timeout: 5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    9 × unexpected value "TTA Bank - Digital Banking"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - img [ref=e6]
    - heading "TTA Bank" [level=1] [ref=e9]
    - paragraph [ref=e10]: Secure Digital Banking Portal
  - generic [ref=e11]:
    - generic [ref=e12]:
      - generic [ref=e13]:
        - generic [ref=e14]: Email Address
        - generic [ref=e15]:
          - generic:
            - img
          - textbox "you@example.com" [ref=e16]: alex.morgan@ttabank.com
      - generic [ref=e17]:
        - generic [ref=e18]: Password
        - generic [ref=e19]:
          - generic:
            - img
          - textbox "••••••••" [ref=e20]
      - generic [ref=e21]:
        - generic [ref=e22]:
          - checkbox "Remember me" [ref=e23]
          - generic [ref=e24]: Remember me
        - link "Forgot password?" [ref=e26] [cursor=pointer]:
          - /url: "#"
      - button "Sign In" [ref=e27] [cursor=pointer]
    - paragraph [ref=e29]:
      - text: Don't have an account?
      - button "Sign Up" [ref=e30] [cursor=pointer]
  - paragraph [ref=e31]:
    - text: © 2024 TTA Bank. All rights reserved.
    - text: Authorized and Regulated by the Financial Conduct Authority.
```

# Test source

```ts
  1  | //Load the solution to GitHub as a project. 
  2  | // Make sure you add the custom reporter also, which I have given you by using here. 
  3  | // Please create a readme file with the screenshots with custom reporter that you are able to verify as well. 
  4  | 
  5  | //TTA Bank- https://tta-bank-digital-973242068062.us-west1.run.app/
  6  | //1. Signup button click, then enter username and password then click create account
  7  | //2. Go to transfer fund then enter amount($5000) and note field then click continue
  8  | //3. then click on Confirm Transfer and go back to Dashboard and verify the amount reduced
  9  | 
  10 | 
  11 | import {test , expect}from '@playwright/test';
  12 | 
  13 | test('Verify the transfer done in TTA Bank' , async({page}) =>{
  14 | 
  15 |     await page.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");
  16 |     await page.getByRole('button', {name : 'Sign Up'}).click();
  17 |     await page.getByPlaceholder('John Doe').fill('Pallavi');
  18 |     await page.getByPlaceholder('you@example.com').fill('pallavi@abc.com');
  19 |     await page.getByPlaceholder('••••••••').fill('pallavi123');
  20 |     await page.getByRole('button', {name : 'Create Account'}).click();
  21 | 
  22 |     await page.waitForTimeout(5000);
  23 | 
  24 |     await page.goto('https://tta-bank-digital-973242068062.us-west1.run.app/');
  25 |     await page.waitForTimeout(5000);
> 26 |     await expect(page).toHaveTitle(/Transfer Funds/);
     |                        ^ Error: expect(page).toHaveTitle(expected) failed
  27 | 
  28 | 
  29 | 
  30 | 
  31 | 
  32 | 
  33 | });
  34 | 
```