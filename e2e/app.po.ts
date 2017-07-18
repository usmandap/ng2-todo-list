import { browser, by, element } from 'protractor';

export class TodoListPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
  testNavigation() {
    browser.get('/');
   // const todos = element(by.css('h1.init-title'));
    const clickAnchor = element(by.css('a.init-route'));
    browser.ignoreSynchronization = true;
    clickAnchor.click();
   // console.log(browser.getCurrentUrl());

    return expect(browser.getCurrentUrl()).toBe('http://localhost:49152/dialog');
  }
}
