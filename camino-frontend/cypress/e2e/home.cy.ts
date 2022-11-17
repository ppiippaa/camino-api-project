describe('Home page testing', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should have underlined nav link in nav bar', () => {
    cy.get("a[data-cy='home']").should('have.css', 'text-decoration-line')
  })


  it('should display shell logo', () => {
    cy.get("img[data-cy='logo']").should('exist').and('have.attr', 'alt').and('include', 'Camino de Santiago shell')
  })

  it('should display title', () => {
    cy.get("p[data-cy='title']").should('have.text', 'A free API for Camino de Santiago albergue JSON data')
  })

  it('should have github href in footer', () => {
    cy.get("a[data-cy='github']").should('have.attr', 'href').and('include', "https://www.github.com/ppiippaa")
  })


})