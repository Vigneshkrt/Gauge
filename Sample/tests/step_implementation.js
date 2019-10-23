/* globals gauge*/
"use strict";
const { openBrowser,write, closeBrowser, goto, press, text, focus, textBox, toRightOf, click } = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async () => {
    await openBrowser({ headless: headless })
});

afterSuite(async () => {
    await closeBrowser();
});
 
step("Goto google.com", async () => {
    await goto('https://www.google.com');
});

step("Search for <query>", async (query) => {
    await write(query)
});

step("Click on the search button", async (content) => {
    await click("Google Search")
    // assert.ok(await text(content).exists());
});
