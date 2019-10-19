import Page from './BasePage'
require('dotenv').config()

class LoginPage extends Page {

    get emailTextBox() { return $('#identifierId') }
    get nextButton() { return $('#identifierNext') }
    get passwordTextButton() { return $('input[type=password]') }
    get nextButtonPassword() { return $('span=Siguiente')}

    login() {
        this.setElementValue(this.emailTextBox, process.env.EMAIL_ADDRESS)
        this.clickElement(this.nextButton)
        this.setElementValue(this.passwordTextButton, process.env.PASSWORD)
        this.clickElement(this.nextButtonPassword)
    }

}

export default new LoginPage()