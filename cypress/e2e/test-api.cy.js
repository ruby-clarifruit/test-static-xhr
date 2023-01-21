import pageObject from './page-objects'

describe('test api', () => {
  beforeEach(() => {
    cy.visit('https://test-2-7u5e.onrender.com/')
    // cy.visit('http://localhost:8080/')
  })

  it('displays two buttons', () => {
    pageObject.confirmApiButtonIsVisible();
    pageObject.confirmClearButtonIsVisible();
  })

  it('calls API when clicking the button', () => {
    pageObject.interceptAndCallApi();
    pageObject.confirmApiButtonIsInvisible();
  })
})
