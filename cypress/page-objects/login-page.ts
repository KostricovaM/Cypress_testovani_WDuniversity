export default class LoginPage {

    get username() {
        return cy.get('#text')
    }

    get password() {
        return cy.get('#password')
    }

    get login() {
        return cy.get('#login-button')
    }

}