class CartPage {
  elements = {
    cartItem: () => cy.get('.cart_item'),
    cartTitle: () => cy.get('.title')
  }

  validateCartHasItems() {
    this.elements.cartItem().should('exist');
  }
}

export default new CartPage();
