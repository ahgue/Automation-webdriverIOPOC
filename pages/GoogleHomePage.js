import Page from './BasePage'

class GoogleHomePage extends Page {

    get loginButton() { return $('#gb_70') }

    open() {
        super.open('https://www.google.com')
    }
}

export default new GoogleHomePage()