describe('Login Page', () => {
  it('Logo and Title', () => {
    cy.visit('/')

    // tc-1
    cy.get('img[alt="company-branding"]').should('have.attr', 'alt', 'company-branding').then(() => {
      cy.log('Orange hrm image alt value is correct. Value: "company-branding"')
    })

    // tc-2
    cy.get('h5:contains("Login")').should('have.text', 'Login')

    // tc-3
    cy.get('div[class="oxd-sheet oxd-sheet--rounded oxd-sheet--gutters oxd-sheet--gray-lighten-2 ' +
        'orangehrm-demo-credentials"]').should('be.visible')

    // tc-4
    cy.get('p:contains("Username : Admin")').should('have.text', 'Username : Admin')

    // tc-5
    cy.get('p:contains("Password : admin123")').should('have.text', 'Password : admin123')

    // tc-6
    cy.get('i[class="oxd-icon bi-person oxd-input-group__label-icon"]').should('be.visible')

    // tc-7
    cy.get('label:contains("Username")').should('have.text', 'Username')

    // tc-8
    cy.get('input[placeholder="Username"]').should('be.visible')

    // tc-9
    cy.get('i[class="oxd-icon bi-key oxd-input-group__label-icon"]').should('be.visible')

    // tc-10
    cy.get('label:contains("Password")').should('have.text', 'Password')

    // tc-11
    cy.get('input[placeholder="Password"]').should('be.visible')

    // tc-12
    cy.get('button:contains(" Login ")').should('be.visible')

    // tc-13
    cy.get('p:contains("Forgot your password? ")').should('have.text', 'Forgot your password? ')

    // tc-14
    cy.get('div[class="orangehrm-copyright-wrapper"]').should('be.visible')

    // tc-15
    cy.get('a[href="https://www.linkedin.com/company/orangehrm/mycompany/"]').should('be.visible')

    // tc-16
    cy.get('a[href="https://www.facebook.com/OrangeHRM/"]').should('be.visible')

    // tc-17
    cy.get('a[href="https://twitter.com/orangehrm?lang=en"]').should('be.visible')

    // tc-18
    cy.get('a[href="https://www.youtube.com/c/OrangeHRMInc"]').should('be.visible')
  })
  it('Incorrect Login', () => {
    cy.visit('/')

    // tc-19
    cy.get('input[placeholder="Username"]').type('testuser')

    // tc-20
    cy.get('input[placeholder="Username"]').should('have.value', 'testuser')

    // tc-21
    // tc-22
    // tc-23
    // tc-24
    // tc-25
    // tc-26
    // tc-27
    // tc-28
    // tc-29
    // tc-30
    // tc-31
  })
  // it('Login and Logout', () => {
  //   cy.visit('/')
  // })
})