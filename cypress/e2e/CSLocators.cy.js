describe('CSSLocators',function(){

    it('CSSlocator first test',function()
    {
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.get('#search_query_top').type('Tshirts')
        cy.get("[name='submit_search']").click()
        cy.get('.lighter', { timeout: 10000 }).should('exist');
        cy.get(".lighter").contains("T-shirts") //Assertions
    
    
    })

}
)