import { Given, When, Then } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { Browser, expect, Page } from '@playwright/test';

let page: Page;
let browser: Browser;

Given('User is on the home page', async function () {
    browser = await chromium.launch({ headless: false , });
    page = await browser.newPage();
    await page.goto('https://demoblaze.com/');

});



Given('user click on login link', async function () {

    await page.locator("//a[@id='login2']").click();
});



When('user enters valid username as {string}', async function (userName) {
    await page.locator('//input[@id="loginusername"]').fill(userName);

});



When('user enters valid password as {string}', async function (password) {

    await page.locator('//input[@id="loginpassword"]').fill(password);
});



Then('click on login btn', async function () {
    await page.locator('//button[text()="Log in"]').click();

});



Then('login shall be sucessfull', async function () {
    expect(page.locator('//a[@id="logout2"]')).toHaveText('Log out');

});