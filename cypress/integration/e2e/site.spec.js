describe('empty spec', () => {
  it('shoiuld visit page', () => {
    cy.visit('localhost:8080');
  });
  describe('the search form', () => {
    it('Search field should be visible', () => {
      cy.root().find('#search-field').should('be.visible');
    });
  });
  describe('the gallery', () => {
    it('searching should display 9 images', () => {
      cy.get('#search-field')
        .type('example\n');
      cy.get('.card').should('have.length', 6);
    });
    it('the next button should work', () => {
      cy.scrollTo('bottom');
      cy.get('#next-button').click();
    });
    it('should still display 6 images', () => {
      cy.get('.card').should('have.length', 6);
    });
    it('navbar should still be in viewport', () => {
      cy.root().find('.navbar');
    });
  });
});
