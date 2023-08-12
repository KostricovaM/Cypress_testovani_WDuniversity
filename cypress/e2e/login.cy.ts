describe('login page', () => {
  beforeEach(() => {
    cy.visit('https://webdriveruniversity.com/Login-Portal/index.html?')

  })
  it('check elements', () => {
    cy
      .get('#text')
      .should('be.visible')
      .should('have.attr', 'placeholder', 'Username')

    cy
      .get('#password')
      .should('be.visible')
      .should('have.attr', 'placeholder', 'Password')

    cy
      .get('#login-button')
      .should('be.visible')
      .should('have.text', 'Login')
  })

  // it('empty fields - login warning', () => {
  //   cy.
  // })

  // it('succesful login', () => {
  //   cy.
  // })
})