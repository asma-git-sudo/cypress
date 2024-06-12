
describe('Rules Test Casessdskdfksjdf qw2', () => {
    // it('test_if_admin_can_add_rule', () => {
    //   cy.changeLanguageBeforeTestStart()
    //   cy.login()
    //   cy.addEmailAccount()
    //   cy.get('.laptop-menu').find('[data-cy="left-sidebar-Rules"]').click()
    //   cy.get('[data-cy="add-new-rule-button"]').click()
  
    //   cy.get('body').then(($el) => {
    //     if (
    //       $el.find(
    //         '.p-dialog > .p-dialog-content .modal-inner-content > .gap-3 > [data-cy="default-rule"]'
    //       ).length > 0
    //     ) {
    //       cy.get('[data-cy="default-rule"]').first().click()
    //       cy.get('[data-cy="rule-save-button"]').click()
    //       cy.get('.p-toast-message-info').should('be.visible')
  
    //       cy.get('[data-cy="rule-option-button"]').first().click()
    //       cy.get('.p-menu-list ').should('be.visible')
    //       cy.get('.p-menuitem-link').filter(':contains("Delete")').click()
    //       cy.get('.p-dialog').should('be.visible')
    //       cy.get('[data-cy="delete-rule-button"]').click()
    //       cy.get('.p-toast-message-info').should('be.visible')
    //     }
    //   })
    // })
  
    // it('test_if_admin_can_add_custom_rule', () => {
    //   cy.changeLanguageBeforeTestStart()
    //   cy.login()
    //   cy.get('.laptop-menu').find('[data-cy="left-sidebar-Rules"]').click()
    //   cy.get('[data-cy="add-new-rule-button"]').click()
  
    //   cy.get('body').then(($el) => {
    //     if (
    //       $el.find(
    //         '.p-dialog > .p-dialog-content .modal-inner-content > .gap-3 > [data-cy="default-rule"]'
    //       ).length > 0
    //     ) {
    //       cy.get('[data-cy="create-custom-rule-button"]').click()
    //     }
    //   })
    //   cy.get('[data-cy="custom-rule-name"]').type('new custom rule')
    //   cy.wait(300)
    //   cy.get('[data-cy="custom-rule-condition-on-field"]').first().click()
    //   cy.wait(300)
    //   cy.get('.p-dropdown-item').first().click();
    //   cy.wait(300)
    //   cy.get('[data-cy="custom-rule-condition-type-field"]').first().click()
    //   cy.wait(300)
    //   cy.get('.p-dropdown-item').first().click({force: true});
    //   cy.wait(300)
    //   cy.get('[data-cy="custom-rule-condition-keyword"]').first().type('new rule')
    //   cy.get('[data-cy="custom-rule-description"]').type(
    //     'this is the new rule description'
    //   )
    //   // toggle
    //   cy.get('[data-cy="rule-condition-toggle"]').click({force: true});
    //   cy.contains('.p-button-label', 'Actions').click();
  
    //   cy.get('[data-cy="custom-rule-action-field"]').click();
    //   cy.get('.p-dropdown-item').first().click();
    //   cy.get('[data-cy="custom-rule-action-folder"]').click();
    //   cy.get('.p-treenode-label').first().click();
  
    //   cy.get('[data-cy="custom-rule-save-button"]').click()
    //   cy.get('.p-toast-message-info').should('be.visible')
    // })
  
    // it('test_if_admin_can_edit_custom_rule', () => {
    //   cy.changeLanguageBeforeTestStart()
    //   cy.login()
    //   cy.get('.laptop-menu').find('[data-cy="left-sidebar-Rules"]').click()
    //   cy.get('[data-cy="rule-option-button"]').first().click()
    //   cy.get('.p-menu-list ').should('be.visible')
    //   cy.get('.p-menuitem-link').filter(':contains("Edit")').click()
    //   cy.get('[data-cy="custom-rule-name"]').clear().type('Another text')
  
    //   cy.get('[data-cy="custom-rule-condition-keyword"]')
    //     .first()
    //     .type('new rule edit')
  
    //   cy.get('[data-cy="rule-condition-toggle"]').click();
    //   cy.contains('.p-button-label', 'Actions').click();
  
    //   cy.get('[data-cy="custom-rule-checkbox"').click()
  
    //   cy.get('[data-cy="custom-rule-action-field"]').first().click();
    //   cy.get('.p-dropdown-item').eq(2).click();
    //   cy.get('[data-cy="custom-rule-action-folder"]').click();
    //   cy.get('.p-treenode-label').last().click();
  
    //   cy.get('[data-cy="custom-rule-description"]').type(
    //     'this is the new rule description with edit'
    //   )
    //   cy.get('[data-cy="custom-rule-save-button"]').click()
    //   cy.get('.p-toast-message-info').should('be.visible')
    // })
  
    // it('test_if_admin_can_add_custom_rule_multiple_conditions', () => {
    //   cy.changeLanguageBeforeTestStart()
    //   cy.login()
    //   cy.get('.laptop-menu').find('[data-cy="left-sidebar-Rules"]').click()
    //   cy.get('[data-cy="add-new-rule-button"]').click()
    //   cy.get('[data-cy="create-custom-rule-button"]').click()
    //   cy.get('[data-cy="custom-rule-name"]').type('new custom rule with multiple conditions')
    //   // custom rule condition
    //   cy.get('[data-cy="custom-rule-condition-on-field"]').first().click()
    //   cy.get('.p-dropdown-item').first().click();
    //   cy.get('[data-cy="custom-rule-condition-type-field"]').first().click()
    //   cy.get('.p-dropdown-item').first().click();
    //   cy.get('[data-cy="custom-rule-condition-keyword"]').first().type('new rule')
    //   cy.get('[data-cy="custom-rule-description"]').type(
    //     'this is the new rule description'
    //   )
    //   cy.get('[data-cy="add-rule"]').click()
  
    //   cy.get('[data-cy="custom-rule-condition-on-field"]').eq(1).click()
    //   cy.get('.p-dropdown-item').eq(1).click();
    //   cy.get('[data-cy="custom-rule-condition-type-field"]').eq(1).click()
    //   cy.get('.p-dropdown-item').eq(1).click();
    //   cy.get('[data-cy="custom-rule-condition-keyword"]').eq(1).type('new rule key ')
  
    //   // toggle
    //   cy.get('[data-cy="rule-condition-toggle"]').click({force: true})
    //   cy.contains('.p-button-label', 'Actions').click();
  
    //   // rule action
    //   cy.get('[data-cy="custom-rule-action-field"]').click();
    //   cy.get('.p-dropdown-item').first().click();
    //   cy.get('[data-cy="custom-rule-action-folder"]').click();
    //   cy.get('.p-treenode-label').first().click();
  
    //   cy.get('[data-cy="custom-rule-save-button"]').click({force: true})
    //   cy.get('.p-toast-message-info').should('be.visible')
    // })
  
  
    it('test_if_admin_can_add_rule_group', () => {
      cy.changeLanguageBeforeTestStart()
      cy.login()
      cy.get('.laptop-menu').find('[data-cy="left-sidebar-Rules"]').click()
      cy.get('[data-cy="add-new-rule-button"]').click()
      cy.get('[data-cy="create-custom-rule-button"]').click()
      cy.get('[data-cy="custom-rule-name"]').type('new custom rule with multiple conditions')
      // custom rule condition
      cy.get('[data-cy="custom-rule-condition-on-field"]').first().click()
      cy.get('.p-dropdown-item').first().click();
      cy.get('[data-cy="custom-rule-condition-type-field"]').first().click()
      cy.get('.p-dropdown-item').first().click();
      cy.get('[data-cy="custom-rule-condition-keyword"]').first().type('new rule')
      cy.get('[data-cy="custom-rule-description"]').type(
        'this is the new rule description'
      )
      cy.get('[data-cy="add-rule"]').click()
  
      cy.get('[data-cy="custom-rule-condition-on-field"]').eq(1).click()
      cy.get('.p-dropdown-item').eq(1).click();
      cy.get('[data-cy="custom-rule-condition-type-field"]').eq(1).click()
      cy.get('.p-dropdown-item').eq(1).click();
      cy.get('[data-cy="custom-rule-condition-keyword"]').eq(1).type('new rule key ')
  
      cy.get('[data-cy="add-group-parent"]').click()
      cy.wait(300)
  
      cy.get('[data-cy="add-rule-in-group"]').click()
      cy.wait(300)
  
      cy.get('[data-cy="add-group-in-parent-group"]').click()
      cy.wait(300)
  
      cy.get('[data-cy="add-rule-in-child-group"]').click()
  
      cy.get('[data-cy="custom-rule-condition-on-field-child-group"]').first().click()
      cy.get('.p-dropdown-item').first().click();
      cy.get('[data-cy="custom-rule-condition-type-field-child-group"]').first().click()
      cy.get('.p-dropdown-item').first().click();
      cy.get('[data-cy="custom-rule-condition-keyword-child-group"]').first().type('this is a child keyword condition')
      cy.wait(300)
  
      cy.get('[data-cy="custom-rule-condition-on-field-child-group"]').eq(1).click()
      cy.get('.p-dropdown-item').eq(1).click();
      cy.get('[data-cy="custom-rule-condition-type-field-child-group"]').eq(1).click()
      cy.get('.p-dropdown-item').eq(1).click();
      cy.get('[data-cy="custom-rule-condition-keyword-child-group"]').eq(1).type('this is a child keyword condition')
  cy.pause()
      // toggle
      cy.get('[data-cy="rule-condition-toggle"]').click({force: true})
      cy.contains('.p-button-label', 'Actions').click();
  
      // rule action
      cy.get('[data-cy="custom-rule-action-field"]').click();
      cy.get('.p-dropdown-item').first().click();
      cy.get('[data-cy="custom-rule-action-folder"]').click();
      cy.get('.p-treenode-label').first().click();
  
      cy.get('[data-cy="custom-rule-save-button"]').click({force: true})
      cy.get('.p-toast-message-info').should('be.visible')
    })
  
    // it('test_if_admin_can_add_custom_rule_multiple_actions', () => {
    //   cy.changeLanguageBeforeTestStart()
    //   cy.login()
    //   cy.get('.laptop-menu').find('[data-cy="left-sidebar-Rules"]').click()
    //   cy.get('[data-cy="add-new-rule-button"]').click()
    //   cy.get('[data-cy="create-custom-rule-button"]').click()
    //   cy.get('[data-cy="custom-rule-name"]').type('new custom rule with multiple conditions')
    //   // custom rule condition
    //   cy.get('[data-cy="custom-rule-condition-on-field"]').first().click()
    //   cy.get('.p-dropdown-item').first().click();
    //   cy.get('[data-cy="custom-rule-condition-type-field"]').first().click()
    //   cy.get('.p-dropdown-item').first().click();
    //   cy.get('[data-cy="custom-rule-condition-keyword"]').first().type('new rule')
    //   cy.get('[data-cy="custom-rule-description"]').type(
    //     'this is the new rule description'
    //   )
  
    //   // toggle
    //   cy.get('[data-cy="rule-condition-toggle"]').click();
    //   cy.contains('.p-button-label', 'Actions').click();
  
    //   // rule action
    //   cy.get('[data-cy="custom-rule-action-field"]').click();
    //   cy.get('.p-dropdown-item').first().click();
    //   cy.get('[data-cy="custom-rule-action-folder"]').click();
    //   cy.get('.p-treenode-label').first().click();
  
  
    //   cy.get('[data-cy="add-rule-action"]').click();
  
    //   cy.get('[data-cy="custom-rule-action-field"]').eq(1).click();
    //   cy.get('.p-dropdown-item').eq(1).click();
    //   cy.get('[data-cy="custom-rule-action-folder"]').eq(1).click();
    //   cy.get('.p-treenode-label').eq(1).click();
  
    //   // save rule
    //   cy.get('[data-cy="custom-rule-save-button"]').click()
    //   cy.get('.p-toast-message-info').should('be.visible')
    // })
  
  
    // it('test_if_admin_can_disable_rule', () => {
    //   cy.changeLanguageBeforeTestStart()
    //   cy.login()
    //   cy.get('.laptop-menu').find('[data-cy="left-sidebar-Rules"]').click()
    //   cy.get('.rule-card').should('be.visible')
    //   cy.get('[data-cy="rule-status-changer"]')
    //     .first()
    //     .then(($el) => {
    //       const initialState = $el.hasClass('p-inputswitch-checked')
  
    //       cy.get('[data-cy="rule-status-changer"]').first().click()
  
    //       if (initialState) {
    //         cy.get('[data-cy="rule-status-changer"]')
    //           .first()
    //           .should('not.have.class', 'p-inputswitch-checked')
    //         cy.get('.rule-desc').first().should('have.class', 'disabled')
    //       } else {
    //         cy.get('[data-cy="rule-status-changer"]')
    //           .first()
    //           .should('have.class', 'p-inputswitch-checked')
    //         cy.get('.rule-desc').first().should('not.have.class', 'disabled')
    //       }
    //     })
  
    // })
  
    // it('test_if_user_can_change_rule_view', () => {
    //   cy.changeLanguageBeforeTestStart()
    //   cy.login()
    //   cy.get('.laptop-menu').find('[data-cy="left-sidebar-Rules"]').click()
    //   cy.get('[data-cy="detail"]').click()
    //   cy.wait(100)
    //   cy.get('.detail-view').should('be.visible')
    //   cy.wait(100)
    //   cy.get('[data-cy="list"]').click()
    //   cy.wait(100)
    //   cy.get('.list-view').should('be.visible')
    // })
  })
 