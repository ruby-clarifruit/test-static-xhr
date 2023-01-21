/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('test api', () => {
  beforeEach(() => {
    // cy.visit('https://test-2-7u5e.onrender.com/')
    cy.visit('http://localhost:8080/')
  })

  it('displays two buttons', () => {
    cy.get('#callapi-button').first().should('have.text', 'Call the Star Wars People API')
    cy.get('#clear-button').first().should('have.text', 'Clear!')
  })
})
