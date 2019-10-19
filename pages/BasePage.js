export default class Page {
    constructor() {
        this.title = 'My Page'
    }

    open(path) {
        browser.url(path)
    }

    clickElement(element) {
        element.waitForDisplayed(3000)
        element.click()
    }

    setElementValue(element, value) {
        element.waitForDisplayed(3000)
        element.setValue(value)
    }
}