// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  'weissbrett e2e tests': browser => {
    browser
      .init()
      .waitForElementVisible('#app')
      .assert.elementPresent('header.v-toolbar')
      .assert.elementPresent('div.panel-left')
      .assert.elementPresent('canvas')
      .assert.elementCount('button', 18)

    // editing board name
    browser
      .setValue('header .v-text-field__slot > input', '')
      .setValue('header .v-text-field__slot > input', 'Awesome new title')
      .click('button[data-nw=open-btn]')
      .waitForElementVisible('.v-dialog--active')
      .assert.containsText('.v-dialog--active .v-list-item__title', 'Awesome new title')
      .click('.v-dialog--active .v-btn.accent--text')

    // drawing
    browser
      .moveToElement('canvas', 20, 20)
      .mouseButtonDown()
      .moveToElement('canvas', 300, 300)
      .mouseButtonUp()
      
    // create new board
    browser
      .click('button[data-nw=new-btn]')
      .waitForElementVisible('.v-dialog--active')
      .click('.v-dialog--active .v-btn.primary')
      .assert.containsText('header .v-text-field__slot > input', 'New board')

    
    browser.end()
  }
}
