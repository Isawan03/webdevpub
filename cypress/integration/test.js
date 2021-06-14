describe('Use navigation', () => {

    it('Go to page then click all navbar items', () => {
        cy.visit('https://isawan03.github.io/webdevpub/')
        for (let i = 0; i < 100; i++) {
            cy.wait(500)
            cy.get('navbar').click()
            cy.wait(500)
            cy.get('#Test2').click()
            cy.wait(500)
            cy.get('#Home').click()
        }
    })
})
