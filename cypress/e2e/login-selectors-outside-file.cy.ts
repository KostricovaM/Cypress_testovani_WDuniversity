import { selectorsLogin } from '../selectors/selectors-login'


describe('login page', () => {
  beforeEach(() => {
    cy.visit('https://webdriveruniversity.com/Login-Portal/index.html?')

  })
  it('check elements', () => {
    cy
      .get(selectorsLogin.username)
      .should('be.visible')
      .should('have.attr', 'placeholder', 'Username')

    cy
      .get(selectorsLogin.password)
      .should('be.visible')
      .should('have.attr', 'placeholder', 'Password')

    cy
      .get(selectorsLogin.login)
      .should('be.visible')
      .should('have.text', 'Login')
  })

  it('empty fields - login warning', () => {
    cy
      .get(selectorsLogin.login)
      .click()

    cy.on('window:alert', (popUp) => {
      expect(popUp).to.equal('validation failed')
      return true;
    })
  })

  it('succesful login', () => {
    cy
      .get(selectorsLogin.username)
      .type('Moje Jmeno')

    cy
      .get(selectorsLogin.password)
      .type('MojeHeslo')

    cy
      .get(selectorsLogin.login)
      .click()
  })
})