describe('About page tests', () => {
    beforeEach(() => {
        cy.visit('/about')
    })

    it('should have underlined nav link in nav bar', () => {
        cy.get("a[data-cy='about']").should('have.css', 'text-decoration-line')
    })

    it('should have gronze link', () => {
        cy.get("a[data-cy='gronzeLink']").should('have.attr', 'href').and('include', 'http://www.gronze.com')
    })

    it('should contain 6 x li in technologies list', () => {
        cy.get("ul[data-cy='technologiesList']").children().should('have.length', 6)
    })

    it('should render 4 images', ()  => {
        cy.get("div[data-cy='gallery']").children().should('have.length', 4)
    })

    it('should have github link in footer', () => {
        cy.get("a[data-cy='github']").should('have.attr', 'href').and('include', "https://www.github.com/ppiippaa")
    })
})