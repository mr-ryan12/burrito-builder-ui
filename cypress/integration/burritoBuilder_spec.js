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

  it('Should display a message if ingredients are not selected', () => {
    cy.get('.order-message')
      .should('have.text', 'Order: Nothing selected')
  });

  it('Should display a message if the name field is empty', () => {
    cy.get('input[name="name"]')
      .should('have.value', '')
      .get('.submit-message')
      .should('have.text', 'Please add your name and ingredients to submit an order')
  });

  it('Should display a message if no ingredients are selected', () => {
    cy.get('.order-message')
      .should('have.text', 'Order: Nothing selected')
      .get('.submit-message')
      .should('have.text', 'Please add your name and ingredients to submit an order')
  });

  it('Should add a name to the name input field', () => {
    cy.get('input[name="name"]')
      .type('Dwight')
      .should('have.value', 'Dwight')
  });

  it('Should add ingredients', () => {
    cy.get('.ingredient-button')
      .first()
      .click()
      .get('.order-message')
      .should('have.text', 'Order: beans')
      .get('.ingredient-button')
      .eq(1)
      .click()
      .get('.order-message')
      .should('have.text', 'Order: beans, steak')
  });

  it('Should add a new order', () => {
    cy.intercept('POST', 'http://localhost:3001/api/v1/orders', { name: 'Dwight',  ingredients: ['beans', 'steak', 'carnitas']}).as('intercept-POST')
    cy.get('input[name="name"]')
      .type('Dwight')
      .get('.ingredient-button')
      .first()
      .click()
      .get('.ingredient-button')
      .eq(1)
      .click()
      .get('.ingredient-button')
      .eq(2)
      .click()
      .get('.submit-button')
      .should('exist')
      .click()
      .wait('@intercept-POST')
      .get('.order')
      .should('have.length', 4)
      .get('.order')
      .eq(3)
      .contains('Dwight')
      .get('.order')
      .eq(3)
      .contains('beans')
      .get('.order')
      .eq(3)
      .contains('steak')
      .get('.order')
      .eq(3)
      .contains('carnitas')
  });
});