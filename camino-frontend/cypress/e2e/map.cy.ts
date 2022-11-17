describe('Map page tests', () => {
    beforeEach(() => {
        cy.visit('/map')
    })

    it('should have underlined nav link in nav bar', () => {
        cy.get("a[data-cy='map']").should('have.css', 'text-decoration-line')
    })

    // should not render mobile message
    it('should not render mobile view message', () => {
        cy.get("div[data-cy='mobile.message']").should('not.exist')
    })

    // should render map --> map renders a google map. map is only loaded when there is data
    it('should render Google map', () => {
        cy.get("[data-cy='map']", {timeout: 8000}).should('exist')
    })

    it('should make backend request with test parameter', () => {
        cy.intercept({
            method: 'GET',
            url: 'http://localhost:5000/albergues?key=test'
        })
    })


    // MARKERS RENDERED TO DOM ON DRAWN ON CANVAS? --> OPTIMISED = TRUE THEN NO.
    // it('should render markers', () => {
    //     cy.get("MarkerF[data-cy='marker']", {timeout: 15000}).should('exist')
    // })
    //
    // // info window should show
    // it('should display InfoBox when clicking on a marker', () => {
    //     // cy.get("[data-cy='marker']", {timeout: 10000}).click()
    //     // cy.get("[data-cy='infoBox']").should('exist')
    // })


    it('should have github href in footer', () => {
        cy.get("a[data-cy='github']").should('have.attr', 'href').and('include', "https://www.github.com/ppiippaa")
    })
})