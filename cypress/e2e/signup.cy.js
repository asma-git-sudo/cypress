//test for successfull signup
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

//test for failed login
// it('test_if_user_failed_signup', () => {
//     cy.changeLanguageBeforeTestStart()
//     cy.get('[data-cy="signup"]').click()
//     cy.signup('1234567890')
//     cy.get('.p-toast-message-error').should('be.visible')
    
// })