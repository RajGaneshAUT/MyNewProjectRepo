// @ts-check
const { test, expect } = require('@playwright/test');
import {testLogin} from '../tests/command/login'


test('test', async ({ page }) => {


 await testLogin(page)


});