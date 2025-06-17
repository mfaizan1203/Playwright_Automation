import {Page, test} from '@playwright/test'

let page: Page
test.beforeAll(async ({browser}) => {
   //initial the browser steup
   page = await browser.newPage()
})

test('navigate to yahoo and search for a keyword @smoke', async() => {
  //navigate to yahoo web site
  await page.goto("https://www.yahoo.com")
  await page.waitForTimeout(3000) //wait for 3 seconds
  // type bmw in the search box
  await page.locator("xpath=//*[@placeholder='Search the web']").fill("bmw")
  // hit submit on search box
  await page.keyboard.press('Enter')
  // wait few seconds for the results to load
  await page.waitForTimeout(3000)
})//end of test 1