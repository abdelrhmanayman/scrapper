import puppeteer from 'puppeteer'



(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto('https://www.livenation.se/event/allevents')

  document.querySelector('a > href')

  // await page.evaluate(() => {
  //   const eventsList =

  //   console.log(eventsList)
  // })

  await browser.close()
})()


