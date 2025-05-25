class InventoryPage {
  elements = {
    title: () => cy.get('.title'),
    addToCartBtn: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
    cartIcon: () => cy.get('.shopping_cart_link'),
  }

  addItemToCart() {
    this.elements.addToCartBtn().click();
  }

  goToCart() {
    this.elements.cartIcon().click();
  }
}

export default new InventoryPage();
