const puppeteer = require('puppeteer');

const getData = async (research) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  const searchWord = research;
  await page.goto(`https://www.ti.com/store/ti/en/p/product/?p=${searchWord}`)
  try {
    await page.waitForSelector('body > main > div:nth-child(10) > div.body-wrap.pdpPageWidth > div > div.product-details.product-details-b2c > section.product-header.row > div.header-top > div.col-sm-6.col-md-9.row.no-gutters > div.col-sm-10 > h1 > ti-product-status > a', {timeout: 3000});
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
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  const searchWord = research;
  await page.goto(`https://www.st.com/content/st_com/en/search.html#q=${searchWord}-t=products-page=1`);
  try {
    await page.waitForSelector('#search-table-products > tbody > tr > td.search-rpns-min-width-col1 > a', {timeout: 3000});
    
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
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  const searchWord = research;
  await page.goto(`https://www.analog.com/en/search.html?q=${searchWord}`);
  try {
    await page.waitForSelector('body > div.content > div:nth-child(1) > div > div.row > div.col-md-10.column-content.column-search-results > div.search-results > div.search-results-items > div.search-results-item.top-result > div > div.col-md-3.col-xs-5.media-title-wrapper > h4 > a', {timeout: 3000});
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
    await page.waitForSelector('#products-results > div.readability.results-teaser > ul > li > h4 > a', {timeout: 3000});
    
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
  await pages.waitForSelector('#order > div:nth-child(2) > div > section > div > table > tbody > tr:nth-child(1) > td', {timeout: 5000});
  const result = await pages.evaluate(() => {
    let infineonTitle = document.querySelector('#order > div:nth-child(2) > div > section > div > table > tbody > tr:nth-child(1) > td').innerText;
    let infineon = document.querySelector('#order > div:nth-child(2) > div > section > div > table > tbody > tr:nth-child(2) > td').innerText;
    return { infineonTitle, infineon }
  })
  browser.close();
  return result
}

const getData4 = async (research) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  const searchWord = research;
  await page.goto(`https://www.renesas.com/eu/en/search?keywords=${searchWord}`);
  try {
    await page.waitForSelector('body > div.header__wrapper > div > div.layout-center > main > div > div > div > div.view-content > div:nth-child(1) > div > span > div.title > h3 > a', {timeout: 3000});
  } catch (error) {
    if (error) {
      renesasTitle = null;
      renesas = null;
      browser.close();
      return { renesasTitle, renesas }
    }
  }
  const result1 =  await page.evaluate(() => {
    let hrefLink = document.querySelector('body > div.header__wrapper > div > div.layout-center > main > div > div > div > div.view-content > div:nth-child(1) > div > span > div.title > h3 > a').href;
     return hrefLink
  })
  const pages = await browser.newPage();
  await pages.goto(`${result1}`);
  await pages.waitForSelector('body > div.header__wrapper > div > div.layout-center > div.block.block-idt-orderable-product.block-idt-product-metadata-block > h1');
  const result = await pages.evaluate(() => {
    let renesasTitle = document.querySelector('body > div.header__wrapper > div > div.layout-center > div.block.block-idt-orderable-product.block-idt-product-metadata-block > h1').innerText;
    let renesas = document.querySelector('body > div.header__wrapper > div > div.layout-center > div.block.block-idt-orderable-product.block-idt-product-metadata-block > span').innerText;
    return { renesasTitle, renesas }
  })
  browser.close();
  return result
}

const getData5 = async (research) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  const searchWord = research;
  await page.goto(`https://www.murata.com/en-eu/search/sitesearch?mss_query=${searchWord}`);
  try {
    await page.waitForSelector('#SiteSearchBrowserLayout > main > div.l-container.js-sitesearch > div.l-content.light.js-sitesearch_product-search-area.is-show > div > div.m-show-more.js-show-more.js-sitesearch_product-search-wrap > div.m-show-more_content > dl > li > a', {timeout: 3000});
  } catch (error) {
    if (error) {
      murataTitle = null;
      murata = null;
      browser.close();
      return { murataTitle, murata }
    }
  }
  const result1 =  await page.evaluate(() => {
    let hrefLink = document.querySelector('#SiteSearchBrowserLayout > main > div.l-container.js-sitesearch > div.l-content.light.js-sitesearch_product-search-area.is-show > div > div.m-show-more.js-show-more.js-sitesearch_product-search-wrap > div.m-show-more_content > dl > li > a').href;
    return hrefLink
  })
  const pages = await browser.newPage();
  await pages.goto(`${result1}`);
  await pages.waitForSelector('#search-result-table > div.table > app-product-table > div > app-product-table-display.product-table.main > table > tr > td.main-table__tr--td.fixed-table > table > tr.row-0 > td.col-partnumber > a');
  const result = await pages.evaluate(() => {
    let murataTitle = document.querySelector('#search-result-table > div.table > app-product-table > div > app-product-table-display.product-table.main > table > tr > td.main-table__tr--td.fixed-table > table > tr.row-0 > td.col-partnumber > a').innerText;
    let murata = document.querySelector('#search-result-table > div.table > app-product-table > div > app-product-table-display.product-table.main > table > tr > td.main-table__tr--td.scroll-table > table > tr.row-0 > td.col_status > div > img').src;
    return { murataTitle, murata }
  })
  browser.close();
  return result
}

const getData6 = async (research) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  const searchWord = research;
  await page.goto(`https://www.microchip.com/sitesearch/search/All/${searchWord}`);
  try {
    await page.waitForSelector('#listView > div:nth-child(1) > div.specifications > h4 > a', {timeout: 3000});
  } catch (error) {
    if (error) {
      microchipTitle = null;
      microchip = null;
      browser.close();
      return { microchipTitle, microchip }
    }
  }
  const result1 =  await page.evaluate(() => {
    let hrefLink = document.querySelector('#listView > div:nth-child(1) > div.specifications > h4 > a').href;
    return hrefLink
  })
  const pages = await browser.newPage();
  await pages.goto(`${result1}`);
  await pages.waitForSelector('body > section.product_top.container-fluid > div > div.col-md-6.col-sm-12.center-section > h1');
  const result = await pages.evaluate(() => {
    let microchipTitle = document.querySelector('body > section.product_top.container-fluid > div > div.col-md-6.col-sm-12.center-section > h1').innerText;
    let microchip = document.querySelector('body > section.product_top.container-fluid > div > div.col-md-6.col-sm-12.center-section > p').innerText;
    return { microchipTitle, microchip }
  })
  browser.close();
  return result
}

module.exports = {
  getData,
  getData1,
  getData2,
  getData3,
  getData4,
  getData5,
  getData6
  }


  