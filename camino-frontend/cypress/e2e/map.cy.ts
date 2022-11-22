describe('Map page tests', () => {
    beforeEach(() => {
        cy.visit('/map')
    })

    it('should have underlined nav link in nav bar', () => {
        cy.get("a[data-cy='map']").should('have.css', 'text-decoration-line')
    })

    it('should not render mobile view message in desktop view', () => {
        cy.get("div[data-cy='mobile.message']").should('not.exist')
    })

    it('should render Google map', () => {
        cy.get("[data-cy='map']", {timeout: 8000}).should('exist')
    })

    it('should make backend request with test parameter', () => {
        cy.intercept({
            method: 'GET',
            url: 'http://localhost:5000/albergues?key=test'
        })
    })


    it('should have github link in footer', () => {
        cy.get("a[data-cy='github']").should('have.attr', 'href').and('include', "https://www.github.com/ppiippaa")
    })
})