describe('Not Found page tests', () => {
    beforeEach(() => {
        cy.visit('/*')
    })

    it('should return the text "Page not found" ', () => {
        cy.get("h1[data-cy='notFound']").should('contain.text', 'Page not found')
    })

    it('should render shell logo', () => {
        cy.get("img[data-cy='shellLogo']").should('exist')
    })

    it('should have github link in footer', () => {
        cy.get("a[data-cy='github']").should('have.attr', 'href').and('include', "https://www.github.com/ppiippaa")
    })

})