describe('Burrito Builder User Flow', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/orders', { fixture: 'orders.json' })
      .visit('http://localhost:3000')
  });

  it('Should have a heading', () => {
    cy.get('h1')
      .should('have.text', 'Burrito Builder')
  });
});