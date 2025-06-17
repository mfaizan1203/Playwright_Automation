import {Page, test} from '@playwright/test'

let page: Page
test.beforeAll(async ({browser}) => {
   //initial the browser steup
   page = await browser.newPage()
})

test('Hover to Quick Tools and click on track a package and then scroll', async() => {
  //navigate to usps web site
  await page.goto("https://www.usps.com")
  await page.waitForTimeout(3000) //wait for 3 seconds
  // hover to Quick Tools
  await page.locator("xpath=//*[text()='Quick Tools']").hover()
  // click on Track a Package
  await page.locator("xpath=//*[text()='Track a Package']").click()
  // wait few seconds for the results to load
  await page.waitForTimeout(3000)
  // scroll down by 300 pixels using mouse wheel
  await page.mouse.wheel(0,300)
  await page.waitForTimeout(3000) // wait for 3 seconds
})//end of test 1