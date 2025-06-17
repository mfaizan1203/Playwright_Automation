import {Page, test} from '@playwright/test'

let page: Page
test.beforeAll(async ({browser}) => {
   //initial the browser steup
   page = await browser.newPage()
})

test('navigate to weight watchers and search for a zipcode @smoke', async() => {
  //navigate to weight watchers web site
  await page.goto("https://www.weightwatchers.com/us/")
  await page.waitForTimeout(3000) //wait for 3 seconds
  //click on find a workshop
  await page.locator("xpath=//*[contains(text(), 'Find a Workshop')]").nth(0).click()
  //click on in person 
  await page.locator("xpath=//*[@class='buttonText-0YATk']").nth(0).click()
  // type in zipcode in the search box
  await page.locator("xpath=//*[@id='location-search']").fill("20877")
  // hit submit on search box
  await page.keyboard.press('Enter')
  //click on the first address
  await page.locator("xpath=//*[@class='linkUnderline-XyxpJ']").nth(0).click()
  })//end of test 1

  test('capture the address and print out the hours and days @smoke', async() => {
  //capture the address
  let address = await page.locator("xpath=//*[@class='address-FnT8k']").textContent()
  //print the address
  console.log("Address is: " + address)
  //wait a few seconds
  await page.waitForTimeout(2500)
  //scoll into view of table
  await page.mouse.wheel(0,600)
  //capture the table with dates and time
  let table = await page.locator("xpath=//*[@class='scheduleContainerMobile-ps6Rm']").textContent()
  //print out the table results
  console.log("Days and hours are: " + table)
  // wait few seconds for the results to load
  await page.waitForTimeout(3000)
})//end of test 2