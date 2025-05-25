import inventoryPage from '../support/pages/inventoryPage';
import cartPage from '../support/pages/cartPage';

describe('Cart Page Tests', () => {
  beforeEach(() => {
    cy.login();
    cy.addItemToCart();
    inventoryPage.goToCart();
  });

  it('should show items in the cart', () => {
    cartPage.elements.cartTitle().should('contain', 'Your Cart');
    cartPage.validateCartHasItems();
  });
});
