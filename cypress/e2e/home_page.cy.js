describe('Home Page', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.get('input[placeholder="Username"]').type(Cypress.env('username'))
        cy.get('input[placeholder="Password"]').type(Cypress.env('password'))
        cy.get('button:contains(" Login ")').click()
    })

    it('Dashboard Header', () => {
        // tc-1
        cy.get('h6:contains("Dashboard")').should('have.text', 'Dashboard')

        // tc-2
        cy.get('span[class="oxd-userdropdown-tab"]').should('be.visible')

        // tc-3
        cy.get('img[class="oxd-userdropdown-img"]').should('be.visible')

        // tc-4
        cy.get('p[class="oxd-userdropdown-name"]').should('be.visible')
    })
    it('Side Navbar', () => {
        // tc-5
        cy.get('nav[aria-label="Sidepanel"]').should('be.visible')

        // tc-6
        cy.get('button[class="oxd-icon-button oxd-main-menu-button"]').should('be.visible')

        // tc-7
        cy.get('img[alt="client brand banner"]').should('be.visible')

        // tc-8
        cy.get('*[class="oxd-icon oxd-menu-icon"]').should('be.visible')

        // tc-9
        cy.get('input[placeholder="Search"]').should('be.visible')

        // tc-10
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-icon').should('be.visible')

        // tc-11
        cy.get('span:contains("Admin")').should('have.text', 'Admin')

        // tc-12
        cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-icon').should('be.visible')

        // tc-13
        cy.get('span:contains("PIM")').should('have.text', 'PIM')

        // tc-14
        cy.get(':nth-child(3) > .oxd-main-menu-item > .oxd-icon').should('be.visible')

        // tc-15
        cy.get('span:contains("Leave")').should('have.text', 'Leave')

        // tc-16
        cy.get(':nth-child(4) > .oxd-main-menu-item > .oxd-icon').should('be.visible')

        // tc-17
        cy.get('span:contains("Time")').should('have.text', 'Time')

        // tc-18
        cy.get(':nth-child(5) > .oxd-main-menu-item > .oxd-icon').should('be.visible')

        // tc-19
        cy.get('span:contains("Recruitment")').should('have.text', 'Recruitment')

        // tc-20
        cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-icon').should('be.visible')

        // tc-21
        cy.get('span:contains("My Info")').should('have.text', 'My Info')

        // tc-22
        cy.get(':nth-child(7) > .oxd-main-menu-item > .oxd-icon').should('be.visible')

        // tc-23
        cy.get('span:contains("Performance")').should('have.text', 'Performance')

        // tc-24
        cy.get(':nth-child(8) > .oxd-main-menu-item > .oxd-icon').should('be.visible')

        // tc-25
        cy.get('span:contains("Dashboard")').should('have.text', 'DashboardDashboard')

        // tc-26
        cy.get(':nth-child(9) > .oxd-main-menu-item > .oxd-icon').should('be.visible')

        // tc-27
        cy.get('span:contains("Directory")').should('have.text', 'Directory')

        // tc-28
        cy.get(':nth-child(10) > .oxd-main-menu-item > .oxd-icon').should('be.visible')

        // tc-29
        cy.get('span:contains("Maintenance")').should('have.text', 'Maintenance')

        // tc-30
        cy.get(':nth-child(11) > .oxd-main-menu-item > .oxd-icon').should('be.visible')

        // tc-31
        cy.get('span:contains("Buzz")').should('have.text', 'Buzz')

        // tc-32
        cy.get('button[class="oxd-icon-button oxd-main-menu-button"]').click()

        // tc-33
        cy.get('img[alt="client brand logo"]').should('be.visible')
    })
    it('Dashboard Page', () => {
        // tc-34
        cy.get('p:contains("Time at Work")').should('have.text', 'Time at Work')

        // tc-35
        cy.get('p:contains("My Actions")').should('have.text', 'My Actions')

        // tc-36
        cy.get('p:contains("Quick Launch")').should('have.text', 'Quick Launch')

        // tc-37
        cy.get('p:contains("Buzz Latest Posts")').should('have.text', 'Buzz Latest Posts')

        // tc-38
        cy.get('p:contains("Employees on Leave Today")').should('have.text', 'Employees on Leave Today')

        // tc-39
        cy.get('p:contains("Employee Distribution by Sub Unit")').should('have.text', 'Employee Distribution by Sub Unit')

        // tc-40
        cy.get('p:contains("Employee Distribution by Location")').should('have.text', 'Employee Distribution by Location')
    })
})