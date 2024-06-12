describe('Write Suit name', () => { //Describe is key word and () represents function
    
    it('test1', function() {
      cy.visit("https://app.inboxfreedom.dev/");

      it('test_if_user_can_successful_signup', () => {

        cy.changeLanguageBeforeTestStart()
    
        cy.get('[data-cy="signup"]').click()
    
        cy.signup()
        cy.wait(2000)
        cy.get('[data-cy="to-login"]').click()
        cy.location().should((location) => {
            expect(location.pathname).to.eq('/login')
        })
        cy.wait(3000)
        // cy.deleteUser()
    })
     // cy.title().should('eq','Google')
    })
})