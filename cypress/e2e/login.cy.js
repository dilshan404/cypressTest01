describe('Login Test', () => {
  it('should login successfully with valid credentials', () => {
    cy.login();
    cy.url().should('include', '/inventory.html');
  });
});
