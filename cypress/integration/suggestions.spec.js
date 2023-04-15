it('type in input field with suggestions', () => {
  cy.visit('/')
  cy.get('#field1').type('foo')
})
