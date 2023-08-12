describe('login page', () => {
  const username = '#text'
  const password = '#password'
  const login = '#login-button'


  beforeEach(() => {
    cy.visit('https://webdriveruniversity.com/Login-Portal/index.html?')

  })
  it('check elements', () => {
    cy
      .get(username)
      .should('be.visible')
      .should('have.attr', 'placeholder', 'Username')

    cy
      .get(password)
      .should('be.visible')
      .should('have.attr', 'placeholder', 'Password')

    cy
      .get(login)
      .should('be.visible')
      .should('have.text', 'Login')
  })

  it('empty fields - login warning', () => {
    cy
      .get(login)
      .click()

    cy.on('window:alert', (popUp) => {
      expect(popUp).to.equal('validation failed')
      return true;
    })
  })

  it('succesful login', () => {
    cy
      .get(username)
      .type('Moje Jmeno')

    cy
      .get(password)
      .type('MojeHeslo')

    cy
      .get(login)
      .click()
  })
})