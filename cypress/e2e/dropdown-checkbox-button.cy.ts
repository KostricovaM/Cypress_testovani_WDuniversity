describe('use dropdowns, checkboxes, radiobuttons', () => {

    const dropdownMenu1 = '#dropdowm-menu-1'
    const dropdownMenu2 = '#dropdowm-menu-2'
    const dropdownMenu3 = '#dropdowm-menu-3'

    const checkbox1 = '[type="checkbox"][value="option-1"]'
    const checkbox2 = '[type="checkbox"][value="option-2"]'
    const checkbox3 = '[type="checkbox"][value="option-3"]'
    const checkbox4 = '[type="checkbox"][value="option-4"]'

    const radio1 = '[type="radio"][value="green"]'
    const radio2 = '[type="radio"][value="blue"]'
    const radio3 = '[type="radio"][value="yellow"]'
    const radio4 = '[type="radio"][value="orange"]'
    const radio5 = '[type="radio"][value="purple"]'


    beforeEach(() => {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')

    })

    it('check and choose dropdown menu', () => {
        cy
            .get(dropdownMenu1)
            .should('be.visible')
            .should('have.value', 'java')
            .select('sql')
            .should('have.value', 'sql')

        cy
            .get(dropdownMenu2)
            .should('be.visible')
            .should('have.value', 'eclipse')
            .select('junit')
            .should('have.value', 'junit')

        cy
            .get(dropdownMenu3)
            .should('be.visible')
            .should('have.value', 'html')
            .select('css')
            .should('have.value', 'css')
    })

    it('check and choose checkboxes', () => {
        cy
            .get(checkbox1)
            .should('be.visible')
            .should('not.be.checked')

        cy
            .get(checkbox2)
            .should('be.visible')
            .should('not.be.checked')

        cy
            .get(checkbox3)
            .should('be.visible')
            .should('be.checked')

        cy
            .get(checkbox4)
            .should('be.visible')
            .should('not.be.checked')

        cy
            .get(checkbox1)
            .check()
            .should('be.checked')

        cy
            .get(checkbox3)
            .should('be.checked')
    })

    it('check and choose radio buttons', () => {
        cy
            .get(radio1)
            .should('be.visible')
            .should('not.be.checked')

        cy
            .get(radio2)
            .should('be.visible')
            .should('not.be.checked')

        cy
            .get(radio3)
            .should('be.visible')
            .should('not.be.checked')

        cy
            .get(radio4)
            .should('be.visible')
            .should('not.be.checked')

        cy
            .get(radio5)
            .should('be.visible')
            .should('not.be.checked')
        //choose a radio buttons, choose another one and check the first one is not chosen anymore
        cy
            .get(radio3)
            .check()
            .should('be.checked')

        cy
            .get(radio4)
            .check()
            .should('be.checked')

        cy
            .get(radio3)
            .should('not.be.checked')
    })
})
