describe('input fields with datalist suggestions', () => {

  it('typing into field with static suggestions', () => {
    cy.visit('/')
    cy.get('#field2').type('lo')
  })

  it('typing into field making AJAX call', () => {
    cy.visit('/')
    cy.get('#field1').type('foo')
  })

})
