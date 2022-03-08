describe('Burrito Builder User Flow', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/orders', { fixture: 'orders.json' })
      .visit('http://localhost:3000')
  });

  // it('Shoud have a background image', () => {
  //   cy.get('main')
  //     .should('have.css', 'background-image', "url('../../burritos.jpg')")
  // })

  it('Should have a heading', () => {
    cy.get('h1')
      .should('have.text', 'Burrito Builder')
  });

  it('Should have an order form', () => {
    cy.get('form')
      .should('exist')
  });

  it('Should have an orders container', () => {
    cy.get('.orders-container')
      .should('exist')
  });

  it('Should have 3 orders in the container', () => {
    cy.get('.order')
      .should('have.length', 3)
  });
});