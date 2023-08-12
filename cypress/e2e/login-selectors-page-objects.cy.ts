import LoginPage from '../page-objects/login-page'

const loginPage = new LoginPage()

describe('login page', () => {
  beforeEach(() => {
    cy.visit('https://webdriveruniversity.com/Login-Portal/index.html?')

  })
  
  it('check elements', () => {

    loginPage.username
      .should('be.visible')
      .should('have.attr', 'placeholder', 'Username')

    loginPage.password
      .should('be.visible')
      .should('have.attr', 'placeholder', 'Password')

    loginPage.login
      .should('be.visible')
      .should('have.text', 'Login')
  })

  it('empty fields - login warning', () => {

    loginPage.login
      .click()

    cy.on('window:alert', (popUp) => {
      expect(popUp).to.equal('validation failed')
      return true;
    })
  })

  it('succesful login', () => {

    loginPage.username
      .type('Moje Jmeno')

    loginPage.password
      .type('MojeHeslo')

    loginPage.login
      .click()
  })
})