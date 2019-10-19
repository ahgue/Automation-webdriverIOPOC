const assert = require('assert')
import GoogleHomePage from '../../pages/GoogleHomePage'
import LoginPage from '../../pages/LoginPage'

describe('Google page', () => {
    it('should login in', () => {
        GoogleHomePage.open()
        GoogleHomePage.clickElement(GoogleHomePage.loginButton)
        LoginPage.login()

        assert.strictEqual(GoogleHomePage.loginButton.isExisting(), false)

    })
})