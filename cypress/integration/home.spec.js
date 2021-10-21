describe('Wikipedia home page', () => {
  it('should redirect from en.wikipedia.org to https://en.wikipedia.org/wiki/Main_Page', () => {
    cy.visit('/')

    cy.url().should('eq', 'https://en.wikipedia.org/wiki/Main_Page')
  })

  it('should allow the user to search and display results', () => {
    cy.visit('/wiki/Main_Page')

    cy.search("world's tallest building")

    // TODO: your assertions
  })
})
