describe('Login Page', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Logo and Title', () => {
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
    // tc-19
    cy.get('input[placeholder="Username"]').type('testuser')

    // tc-20
    cy.get('input[placeholder="Username"]').should('have.value', 'testuser')

    // tc-21
    cy.get('input[placeholder="Password"]').type(Cypress.env('password'))

    // tc-22
    cy.get('input[placeholder="Password"]').should('have.value', Cypress.env('password'))

    // tc-23
    cy.get('button:contains(" Login ")').click()

    // tc-24
    cy.get('p:contains("Invalid credentials")').should('have.text', 'Invalid credentials')

    // tc-25
    cy.get('input[placeholder="Username"]').clear()
    cy.get('input[placeholder="Password"]').clear()

    // tc-26
    cy.get('input[placeholder="Username"]').type(Cypress.env('username'))

    // tc-27
    cy.get('input[placeholder="Username"]').should('have.value', Cypress.env('username'))

    // tc-28
    cy.get('input[placeholder="Password"]').type('testpassword')

    // tc-29
    cy.get('input[placeholder="Password"]').should('have.value', 'testpassword')

    // tc-30
    cy.get('button:contains(" Login ")').click()

    // tc-31
    cy.get('p:contains("Invalid credentials")').should('have.text', 'Invalid credentials')
  })
  it('Login and Logout', () => {
    // tc-32
    cy.get('input[placeholder="Username"]').type(Cypress.env('username'))

    // tc-33
    cy.get('input[placeholder="Username"]').should('have.value', Cypress.env('username'))

    // tc-34
    cy.get('input[placeholder="Password"]').type(Cypress.env('password'))

    // tc-35
    cy.get('input[placeholder="Password"]').should('have.value', Cypress.env('password'))

    // tc-36
    cy.get('button:contains(" Login ")').click()

    // tc-37
    cy.get('h6:contains("Dashboard")').should('have.text', 'Dashboard')

    // tc-38
    cy.get('span[class="oxd-userdropdown-tab"]').should('be.visible')

    // tc-39
    cy.get('img[class="oxd-userdropdown-img"]').should('be.visible')

    // tc-40
    cy.get('p[class="oxd-userdropdown-name"]').should('be.visible')

    // tc-41
    cy.get('span[class="oxd-userdropdown-tab"]').click()

    // tc-42
    cy.get('ul[role="menu"]').should('be.visible')

    // tc-43
    cy.get('a:contains("About")').should('have.text', 'About')

    // tc-44
    cy.get('a:contains("Support")').should('have.text', 'Support')

    // tc-45
    cy.get('a:contains("Change Password")').should('have.text', 'Change Password')

    // tc-46
    cy.get('a:contains("Logout")').should('have.text', 'Logout')

    // tc-47
    // cy.get('a:contains("Logout")').click()

    // tc-48
    // cy.get('h5:contains("Login")').should('have.text', 'Login').wait(1000)
  })
})