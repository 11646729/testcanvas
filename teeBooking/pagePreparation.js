import "dotenv/config.js"

const sleep = (ms) => new Promise((res) => setTimeout(res, ms))
export const pagePreparationObject = {
  async loadInitialWebPage(browserInstance, urlString) {
    // Assign browserInstance to browser variable
    let browser = await browserInstance

    // // Load Browser Instance
    let page = await browser.newPage()

    await page.setUserAgent(
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0.1 Safari/605.1.15"
    )

    // Navigate to Initial Web page & wait for it to load
    await page.goto(urlString, { waitUntil: "load" })
    console.log(`Navigated to ${urlString} ...`)

    return page
  },

  // ------------------------------------------------------------------

  async login(pageInstance) {
    // Enter Username & Password
    await pageInstance.waitForSelector("#memberid")
    await pageInstance.type("#memberid", process.env.MEMBERID)

    await pageInstance.waitForSelector("#pin")
    await pageInstance.type("#pin", process.env.PIN)

    // Submit the Login form and wait for process to complete
    await Promise.all([
      await pageInstance.click('.btn[type="submit"]'),
      pageInstance.waitForNavigation({ waitUntil: "networkidle0" }),
      console.log(`Logged In ...`),
    ])

    // let hasLoadMoreButton = true

    // // Now load more data
    // const loadMoreButtonString =
    //   "#myteetimes > table > tbody > tr:nth-child(7) > td > a"
    // const loadMoreButton = await pageInstance.$(loadMoreButtonString)

    // if (hasLoadMoreButton) {
    //   console.log("Tee Booking Button exists")

    const bookingUrl = "https://www.cgc-ni.com/memberbooking/"
    await pageInstance.goto(bookingUrl, { waitUntil: "load" })
    // }
  },

  // ------------------------------------------------------------------

  async loadTodaysTeeBookingPage(pageInstance) {
    console.log("In loadTodaysTeeBookingPage function")

    // const bookingUrl = "https://www.cgc-ni.com/memberbooking/"
    // await pageInstance.goto(bookingUrl, { waitUntil: "load" })
  },

  // ------------------------------------------------------------------
}