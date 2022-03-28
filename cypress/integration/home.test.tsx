/// <reference types="cypress"/>

context('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should render the home page and click on fisrt card', () => {
    cy.get('main[id=card-button]', { timeout: 4000 })
      .should('be.visible')
      .first()
      .click({ force: true });
  });

  it('should click in a card and show the details', () => {
    cy.get('main[id=card-button]', { timeout: 4000 })
      .should('be.visible')
      .find('p')
      .contains('dp2-69')
      .first()
      .click({ force: true });

    cy.get('section[id=attack-section]').find('button').first().click();

    cy.get('button[id=close-button]', { timeout: 2000 }).click();
  });
});

export {};
