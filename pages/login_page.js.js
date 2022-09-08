const { I } = inject();

module.exports = {
  fields: {
    username: '[data-test=username]',
    password: '[data-test=password]'
  },

  buttons: {
    login: '[data-test="login-button"]'
  },

  messages: {
    login_error: '[data-test=error]'
  },

  visit() {
    I.amOnPage('https://www.saucedemo.com/')
  },

  fillUsername() {
    I.fillField(this.fields.username, 'standard_user')
  },

  fillWrongEmail() {
    I.fillField(this.fields.username, 'wrong_user')
  },

  fillPassword() {
    I.fillField(this.fields.password, 'secret_sauce')
  },

  tapButtonEnter() {
    I.click(this.buttons.login)
  },

  checkLoginError() {
    const mensagem = "Epic sadface: Username and password do not match any user in this service"
    
    I.waitForElement(this.messages.login_error, 5)
    I.see(mensagem, this.messages.login_error)
  },

  doLogin() {
    I.fillField(this.fields.username, 'standard_user')
    I.fillField(this.fields.password, 'secret_sauce')
    I.click(this.buttons.login)
  },
}
