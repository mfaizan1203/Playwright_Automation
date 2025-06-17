import {Page, test} from '@playwright/test'

let page: Page
test.beforeAll(async ({browser}) => {
    //intialize the browser setup
    page = await browser.newPage()
})

test('navigate to Bing and search for a keyword @smoke', async() => {
let sports = Array<string>()
    sports.push("soccer")
    sports.push("baseball")
    sports.push("cricket")
    for (let i = 0; i < sports.length; i++) {
        //navigate to bing web site
        await page.goto("https://www.bing.com")
        await page.waitForTimeout(3000) //wait for 3 seconds
        // type bmw in the search box
        await page.locator("xpath=//*[@name='q']").fill(sports[i])
        // hit submit on search box
        await page.keyboard.press('Enter')
        // wait few seconds for the results to load
        await page.waitForTimeout(3000)
        //capture the results
        let results = await page.locator("xpath=//*[@class='sb_count']").textContent()
        // print the results
        let arrayResults = results.split(' ')
        console.log("For sport " + sports[i] + " the search number is " + arrayResults[1])
    }//end of for loop
})//end of test 