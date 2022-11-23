describe('Userlist', () => {
  it('passes', () => {
    cy.visit('http://localhost:8000/')
  })
  it('CRUD', () => {
    cy.get('input[name="email"]').type('superadmin@gmail.com')
    cy.get('input[name="password"]').type('password')
    cy.get('.btn')
    .contains('Login')
    .click()
    cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas')
    .click()
    cy.get(':nth-child(2) > .has-dropdown > span').click()
    cy.get('.active > .dropdown-menu > li > .nav-link')
    .click()
    cy.get('.card-header-action > .btn-icon').click()
    cy.get('input[name="name"]').type('Hafiyyan')
    cy.get('input[name="email"]').type('hf@gmail.com')
    cy.get('input[name="password"]').type('password')
    cy.get('.btn-primary').click()
    cy.get(':nth-child(4) > .text-right > .d-flex > .btn-info').click()
    cy.get('#name').type('hfz')
    cy.get('#email').type('hf')
    cy.get('.btn-primary').click()
    cy.get(':nth-child(4) > .text-right > .d-flex > .ml-2 > .btn').click()
  })
})