import {Page, test} from '@playwright/test'

let page: Page
test.beforeAll(async ({browser}) => {
    //intialize the browser setup
    page = await browser.newPage()
})

test('navigate to Bing and search for a keyword @smoke', async() => {
    //navigate to bing web site
  await page.goto("https://www.bing.com")
  await page.waitForTimeout(3000)
  // type bmw in the search box
  await page.locator("xpath=//*[@name='q']").fill("bmw")
  // hit submit on search box
  await page.keyboard.press('Enter');
  // wait few seconds for the results to load
  await page.waitForTimeout(3000)
})//end of test 1

test('capture the results and print', async() => {
    //capture the results
    let results = await page.locator("xpath=//*[@class='sb_count']").textContent()
    //print the results
    let arrayResults = results.split(' ')
    console.log("Total result count is " + arrayResults[1])
})//end of test 2