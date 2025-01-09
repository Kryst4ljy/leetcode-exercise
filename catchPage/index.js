const puppeteer = require('puppeteer');

const config = process.argv.slice(2);
const targetUrl = config[0];

const openPage = async (url) => {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  });
  const page = await browser.newPage();
  await page.goto(url);

  // 获取标题元素
  const titleElement = await page.$('.text-title-large');
  const innerHTML = await titleElement.$eval('.no-underline', (element) => element.innerHTML);

  console.log(`InnerHTML of the element: ${innerHTML}`);

  await browser.close();
};

openPage(targetUrl);
