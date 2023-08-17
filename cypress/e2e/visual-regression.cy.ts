describe('visual test of the homepage', () => {
    it('takes a screenshot of the page', () => {
        cy.visit('https://webdriveruniversity.com/')

        // screenshot of the whole page
        cy.matchImage();
    })
})