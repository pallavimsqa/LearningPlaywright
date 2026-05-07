# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Projects\Project_4_TTA_Bank.spec.ts >> Verify the transfer done in TTA Bank
- Location: tests\Projects\Project_4_TTA_Bank.spec.ts:13:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByLabel('Full Name')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - img [ref=e6]
    - heading "TTA Bank" [level=1] [ref=e9]
    - paragraph [ref=e10]: Create your digital account
  - generic [ref=e11]:
    - generic [ref=e12]:
      - generic [ref=e13]:
        - generic [ref=e14]: Full Name
        - generic [ref=e15]:
          - generic:
            - img
          - textbox "John Doe" [ref=e16]
      - generic [ref=e17]:
        - generic [ref=e18]: Email Address
        - generic [ref=e19]:
          - generic:
            - img
          - textbox "you@example.com" [ref=e20]
      - generic [ref=e21]:
        - generic [ref=e22]: Password
        - generic [ref=e23]:
          - generic:
            - img
          - textbox "••••••••" [ref=e24]
      - button "Create Account" [ref=e25] [cursor=pointer]
    - paragraph [ref=e27]:
      - text: Already have an account?
      - button "Sign In" [active] [ref=e28] [cursor=pointer]
  - paragraph [ref=e29]:
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
> 17 |     await page.getByLabel('Full Name').fill('Pallavi');
     |                                        ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  18 |     await page.getByLabel('Email Address').fill('pallavi@abc.com');
  19 |     await page.getByLabel('Password').fill('pallavi123');
  20 |     await page.getByRole('button', {name : 'Create Account'}).click();
  21 | 
  22 | 
  23 | });
  24 | 
```