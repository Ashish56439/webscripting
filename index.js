const puppeteer = require('puppeteer');
const scrapers = require("./scrapers/class-base");

(async () => {
    let browser;
    let page;

    try{
      browser = await puppeteer.launch({
          headless:false
      });
      page = await browser.newPage();
      await new scrapers(browser, page).main();
    }catch(error){
        console.log(error.stack || error);
    }
    await browser.close();
});