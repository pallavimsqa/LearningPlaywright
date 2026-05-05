import {test,expect} from '@playwright/test';

test('CSS advanced locators',async({page}) => {

await page.goto("https://awesomeqa.com/css/");

const allSpan = page.locator('div.first > span');
const count = await allSpan.count();
console.log(count);

const firstspan = await allSpan.first().textContent();
const span1 = await allSpan.nth(1).textContent();
const span2 = await allSpan.nth(2).textContent();
const span3 = await allSpan.nth(3).textContent();
const span4 = await allSpan.nth(4).textContent();
const span5 = await allSpan.nth(5).textContent();
const lastspan = await allSpan.last().textContent();

console.log("First span:", firstspan);
console.log("span2:", span1);
console.log("span3:", span2);
console.log("span4:", span3);
console.log("span5:", span4);
console.log("span6:", span5);
console.log("Last span:", lastspan);



for (let i=0;i< count; i++){
    let span_ith = await allSpan.nth(i).textContent();
    console.log(span_ith);
}
} );
