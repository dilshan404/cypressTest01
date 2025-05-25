import inventoryPage from '../support/pages/inventoryPage';

describe('Inventory Page Tests', () => {
  beforeEach(() => {
    cy.login();
  });

  it('should add item to cart successfully', () => {
    inventoryPage.elements.title().should('contain', 'Products');
    cy.addItemToCart();
    inventoryPage.elements.cartIcon().should('contain', '1');
  });
});
