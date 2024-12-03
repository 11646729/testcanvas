import {
  pagePreparationObject,
  breakdownBookingTimes,
} from "./pagePreparation.js"

const scraperController = async (browserInstance) => {
  // Load Home Web Page
  let page = await pagePreparationObject.loadHomeWebPage(browserInstance)

  // Login to Tee Booking section of the Golf Club Web Site
  page = await pagePreparationObject.loginToTeeBookingSubsystem(page)

  const requestedBooking = new Date("2024-12-13T18:00:00.000Z")
  const numberOfBuggiesRequested = 2

  // const daysFromToday = 14
  // const twoWeeks = 1000 * 60 * 60 * 24 * daysFromToday
  // const requestedBooking = new Date(new Date().getTime() + twoWeeks)
  // console.log("Two Weeks Time: " + requestedBooking.toISOString())

  // --------------------
  // SHOULD BE 00 MINUTES OR EITHER EVERY 10 MINUTES OR EVERY 8 MINUTES IN SUMMER
  // --------------------

  const bookingDateTime = new breakdownBookingTimes(requestedBooking)

  // Navigate to Tee Booking Page daysFromToday Days Ahead
  await pagePreparationObject.loadTodaysTeeBookingPage(
    page,
    bookingDateTime.daysOfTeeBooking,
    bookingDateTime.monthsOfTeeBooking,
    bookingDateTime.yearsOfTeeBooking
  )

  // Scroll to Tee Slot that we want to target for booking
  await pagePreparationObject.scrollToTeeBookingDateTime(
    page,
    bookingDateTime.yearsOfTeeBooking,
    bookingDateTime.monthsOfTeeBooking,
    bookingDateTime.daysOfTeeBooking,
    bookingDateTime.hoursOfTeeBooking,
    bookingDateTime.minutesOfTeeBooking,
    bookingDateTime.secondsOfTeeBooking,
    numberOfBuggiesRequested
  )

  // Close the browser
  // closeBrowser(browserInstance)
}

// ------------------------------------------------------------------

export default (browserInstance) => scraperController(browserInstance)
