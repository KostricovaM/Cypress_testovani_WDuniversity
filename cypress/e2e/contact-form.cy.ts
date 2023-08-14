describe('fill in all info and use reset button', () => {

    const formTitle = 'h2'
    const firstName = 'input[name="first_name"]'
    const lastName = 'input[name="last_name"]'
    const emailAddress = 'input[name="email"]'
    const comments = 'textarea[name="message"]'
    const resetButton = 'input[type="reset"]'
    const submitButton = 'input[type="submit"]'

    beforeEach(() => {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

    })

    it('check the form', () => {
        cy
            .get(formTitle)
            .should('be.visible')
            .should('have.text', 'CONTACT US')

        cy
            .get(firstName)
            .should('be.visible')
            .should('have.attr', 'placeholder', 'First Name')

        cy
            .get(lastName)
            .should('be.visible')
            .should('have.attr', 'placeholder', 'Last Name')

        cy
            .get(emailAddress)
            .should('be.visible')
            .should('have.attr', 'placeholder', 'Email Address')

        cy
            .get(comments)
            .should('be.visible')
            .should('have.attr', 'placeholder', 'Comments')

        cy
            .get(resetButton)
            .should('be.visible')
            .should('have.attr', 'value', 'RESET')

        cy
            .get(submitButton)
            .should('be.visible')
            .should('have.attr', 'value', 'SUBMIT')

    })

    it('fill the form, assert + reset', () => {

        cy
            .get(firstName)
            .type('Anna')
            .should('have.value', 'Anna')

        cy
            .get(lastName)
            .type('Moudrá')
            .should('have.value', 'Moudrá')

        cy
            .get(emailAddress)
            .type('hana.moudra5184@seznam.cz')
            .should('have.value', 'hana.moudra5184@seznam.cz')
        cy
            .get(comments)
            .type('Zde je můj komentář.')
            .should('have.value', 'Zde je můj komentář.')

        cy
            .get(resetButton)
            .click()

        //assertion / reset button works
        cy
            .get(firstName)
            .should('have.value', '')

        cy
            .get(lastName)
            .should('have.value', '')

        cy
            .get(emailAddress)
            .should('have.value', '')

        cy
            .get(comments)
            .should('have.value', '')

    })

    it('fill the form + submit', () => {
        cy
            .get(firstName)
            .type('Anna')

        cy
            .get(lastName)
            .type('Moudrá')

        cy
            .get(emailAddress)
            .type('hana.moudra5184@seznam.cz')

        cy
            .get(comments)
            .type('Zde je můj komentář.')

        cy
            .get(submitButton)
            .click()
    })
})
