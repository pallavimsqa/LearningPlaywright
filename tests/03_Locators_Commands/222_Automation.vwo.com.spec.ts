import {test , expect }from '@playwright/test';

test("locators are lazy, strict, and auto-wait",async({page}) =>{ 
      await page.goto("https://app.vwo.com/#login");

      //<input 
      // type="password" 
      // class="text-input W(100%) Pend(36px)" 
      // vwo-html-translate-attr="placeholder" 
      // vwo-html-translate-placeholder="login:enterPassword" 
      // name="password" 
      // id="login-password" 
      // data-qa="jobodapuxe" 
      // placeholder="Enter password" 
      // fdprocessedid="pnh6m9">
      // Rule 1- locator preferences -> Id-name-class-tag Name-css-xpath

      // Rule 2 - using the locators
      // Id - #
      //class - .

      //create locators - nothing happens yet(lazy)
      let usernameField = page.locator("#login-username");
      let passwordField = page.locator("#login-password");
      let loginButton = page.locator("#js-login-btn");

      //now playwright finds the element and acts(auto-wait)
      await usernameField.fill("admin");
      await passwordField.fill("pass123");
      await loginButton.click();


      console.log("All actions completed");

      let error_message = page.locator('#js-notification-box-msg');
      //error_message.getByText();
      await expect(error_message).toContainText("Your email, password, IP address or location did not match");

});
