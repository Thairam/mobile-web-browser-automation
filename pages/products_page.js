const { I } = inject()

module.exports = {
  fields: {
    products: '.inventory_container'
  },
  
  checkLoginSuccess() {
    I.waitForElement(this.fields.products, 5)
    I.seeElement(this.fields.products)
  }
}
