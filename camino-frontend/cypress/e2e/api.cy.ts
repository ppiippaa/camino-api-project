describe('API page tests', () => {
    beforeEach(() => {
        cy.visit('/api')
        cy.wait(1500)
    })

    it('should have underlined nav link in nav bar', () => {
        cy.get("a[data-cy='api']").should('have.css', 'text-decoration-line')
    })


    it('should render 6 DocInfo components', () => {
        cy.get("data-cy='requestContainer'").children().should('have.length', 6)
    })


    it('should make GET request to http://localhost:5000/api/albergue/636a3c49d09200844a57cb1a', () => {
        cy.intercept({
            method: 'GET',
            url: 'http://localhost:5000/api/albergue/636a3c49d09200844a57cb1a'
        })
    })

    it('should make GET request to http://localhost:5000/api/albergues', () => {
        cy.intercept({
            method: 'GET',
            url: 'http://localhost:5000/api/albergues'
        })
    })

    it('should make GET request to http://localhost:5000/api/albergues?page=2', () => {
        cy.intercept({
            method: 'GET',
            url: 'http://localhost:5000/api/albergues?page=2'
        })
    })

    it('should make GET request to http://localhost:5000/api/albergues?count=20', () => {
        cy.intercept({
            method: 'GET',
            url: 'http://localhost:5000/api/albergues?count=20'
        })
    })

    it('should make GET request to http://localhost:5000/api/albergues?camino=fisterra-y-muxia', () => {
        cy.intercept({
            method: 'GET',
            url: 'http://localhost:5000/api/albergues?camino=fisterra-y-muxia'
        })
    })

    it('should make GET request to http://localhost:5000/api/albergues?page=3&count=15&camino=camino-primitivo', () => {
        cy.intercept({
            method: 'GET',
            url: 'http://localhost:5000/api/albergues?page=3&count=15&camino=camino-primitivo'
        })
    })

    it('should have github link in footer', () => {
        cy.get("a[data-cy='github']").should('have.attr', 'href').and('include', "https://www.github.com/ppiippaa")
    })

})