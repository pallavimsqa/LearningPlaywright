import {test, expect} from '@playwright/test';

test.skip('skip the test case', async({page}) =>{
    // this test is skipped
});

test.only('focused test', async({page}) =>{
    //only run this test
});

test.fail('expected to fail', async({page}) =>{
    // test is expected to fail
});

test.slow('Slow test', async({page}) =>{
    // has extended timeout
});

// conditional skip
test('conditional', async ({page, browserName}) =>{
    test.skip(browserName === 'firefox', 'Not supported in firefox');

});