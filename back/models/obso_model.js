const puppeteer = require('puppeteer');

const getData = async (research) => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage();
  const searchWord = research;
  await page.goto(`https://www.ti.com/store/ti/en/p/product/?p=${searchWord}`)
  try {
    await page.waitForSelector('body > main > div:nth-child(10) > div.body-wrap.pdpPageWidth > div > div.product-details.product-details-b2c > section.product-header.row > div.header-top > div.col-sm-6.col-md-9.row.no-gutters > div.col-sm-10 > h1 > ti-product-status > a');
  } catch (error) {
    if (error) {
      let tiTitle = null;
      let ti = null;
      browser.close();
      return { tiTitle, ti }
    }
  }
  const result = await page.evaluate(() => {
    let ti = document.querySelector('body > main > div:nth-child(10) > div.body-wrap.pdpPageWidth > div > div.product-details.product-details-b2c > section.product-header.row > div.header-top > div.col-sm-6.col-md-9.row.no-gutters > div.col-sm-10 > h1 > ti-product-status > a').innerText;
    let tiTitle = document.querySelector('body > main > div:nth-child(10) > div.body-wrap.pdpPageWidth > div > div.product-details.product-details-b2c > section.product-header.row > div.header-top > div.col-sm-6.col-md-9.row.no-gutters > div.col-sm-10 > h1').innerText;
    
    return { tiTitle, ti }
  })
  browser.close()
  return result
}
const getData1 = async (research) => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage();
  const searchWord = research;
  await page.goto(`https://www.st.com/content/st_com/en/search.html#q=${searchWord}-t=products-page=1`);
  try {
    await page.waitForSelector('#search-table-products > tbody > tr > td.search-rpns-min-width-col1 > a');
    
  } catch (error) {
    if (error) {
      let stTitle = null;
      let st = null;
      browser.close();
      return { stTitle, st }
    }
  }
  const result = await page.evaluate(() => {
    let stTitle = document.querySelector('#search-table-products > tbody > tr > td.search-rpns-min-width-col1 > a').innerText;
    let st = document.querySelector('#search-table-products > tbody > tr > td.search-rpns-min-width-col2 > div').innerText;
    return { stTitle, st }
  })
  browser.close();
  return result
}

const getData2 = async (research) => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage();
  const searchWord = research;
  await page.goto(`https://www.analog.com/en/search.html?q=${searchWord}`);
  try {
    await page.waitForSelector('body > div.content > div:nth-child(1) > div > div.row > div.col-md-10.column-content.column-search-results > div.search-results > div.search-results-items > div.search-results-item.top-result > div > div.col-md-3.col-xs-5.media-title-wrapper > h4 > a');
} catch (error) {
  if (error) {
    adTitle = null;
    ad = null;
    browser.close();
    return { adTitle, ad }
  }
}
const result = await page.evaluate(() => {
  let adTitle = document.querySelector('body > div.content > div:nth-child(1) > div > div.row > div.col-md-10.column-content.column-search-results > div.search-results > div.search-results-items > div.search-results-item.top-result > div > div.col-md-3.col-xs-5.media-title-wrapper > h4 > a').innerText;
  let ad = document.querySelector('body > div.content > div:nth-child(1) > div > div.row > div.col-md-10.column-content.column-search-results > div.search-results > div.search-results-items > div.search-results-item.top-result > span > div > a').innerText;
   return { adTitle, ad }
  })
  browser.close();
  return result
}

const getData3 = async (research) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  const searchWord = research;
  await page.goto(`https://www.infineon.com/cms/en/search.html#!term=${searchWord}&view=products`);
  try {
    await page.waitForSelector('#cookie-modal > div > div > div.modal-footer > div > form > div.cookieModal-cookie-settings__container > button');
    await page.click('#cookie-modal > div > div > div.modal-footer > div > form > div.cookieModal-cookie-settings__container > button');
    await page.waitForSelector('#products-results > div.readability.results-teaser > ul > li > h4 > a');
    
  } catch (error) {
    if (error) {
      infineonTitle = null;
      infineon = null;
      browser.close();
      return { infineonTitle, infineon }
    }
  }
  const result1 =  await page.evaluate(() => {
    let hrefLink = document.querySelector('#products-results > div.readability.results-teaser > ul > li > h4 > a').href;
     return hrefLink
  })
  const pages = await browser.newPage();
  await pages.goto(`${result1}`);
  await pages.waitForSelector('#order > div:nth-child(2) > div > section > div > table > tbody > tr:nth-child(1) > td');
  const result = await pages.evaluate(() => {
    let infineonTitle = document.querySelector('#order > div:nth-child(2) > div > section > div > table > tbody > tr:nth-child(1) > td').innerText;
    let infineon = document.querySelector('#order > div:nth-child(2) > div > section > div > table > tbody > tr:nth-child(2) > td').innerText;
     return { infineonTitle, infineon }
  })
  browser.close();
  return result
}
/* getData().then(value => {
  console.log(value)
  
})
getData1().then(value => {
  console.log(value)
  
})

getData2().then(value => {
  console.log(value)
  
})

getData3().then(value => {
  console.log(value)
  
})
 */
module.exports = {
  getData,
  getData1,
  getData2,
  getData3
  }


  