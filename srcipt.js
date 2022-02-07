"use strict";

// alert(nameInput);

// import {nameInput} from './html';

const {addInput} = require('./html');
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://lk.sut.ru/cabinet/?login=yes');
  await page.waitFor('input[name="users"]');
  await page.focus('input[name="users"]');
//   await page.keyboard.type('new.smile321@bk.ru');
  await page.keyboard.type(`${addInput}`);
  await new Promise(r => setTimeout(r, 1000));

  await page.focus('input[name="parole"]');
  await page.keyboard.type(`sdfsdf`);
  await new Promise(r => setTimeout(r, 1000));
  await page.click('#logButton');
  await new Promise(r => setTimeout(r, 1000));
  await page.click('[data-target="#collapse1"]');
  await page.click('#menu_li_6118');
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'example.png' });
  await new Promise(r => setTimeout(r, 1000));
  await browser.close();
})();
