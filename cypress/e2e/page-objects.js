const pageObject = {
  callApiButton: '#callapi-button',
  clearButton: '#clear-button',

  getApiButton() {
    return cy.get(this.callApiButton);
  },
  getClearButton() {
    return cy.get(this.clearButton);
  },
  confirmApiButtonIsVisible() {
    this.getApiButton().should('be.visible');
  },
  confirmClearButtonIsVisible() {
    this.getClearButton().should('be.visible');
  },
  clickCallApiButton() {
    this.getApiButton().click();
  },
  clickClearButton() {
    this.getClearButton().click();
  },
  interceptAndCallApi() {
    cy.intercept('**/people/', (req) => {
      req.on('response', (res) => {
        const people = res.body.results;
        expect(people).to.have.lengthOf(10);
      })
    }).as('getPeople');
    this.clickCallApiButton();
    cy.wait('@getPeople');
  },
  confirmApiButtonIsInvisible() {
    this.getApiButton().should('not.be.visible');
  }
};

export default pageObject;
