const { login_page, products_page } = inject()

Given("I'am on Login page", () => {
  login_page.visit()
})

Given('I fill username', () => {
  login_page.fillUsername()
})

Given('I fill wrong username', () => {
  login_page.fillWrongEmail()
})

Given('I fill password', () => {
  login_page.fillPassword()
})

When('I click on Login button', () => {
  login_page.tapButtonEnter()
})

Then('I see the products', () => {
  products_page.checkLoginSuccess()
})

Then('I see the Login error', () => {
  login_page.checkLoginError()
})

Given("I'm logged in", () => {
  login_page.doLogin()
})
