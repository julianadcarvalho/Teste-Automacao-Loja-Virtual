import { ELEMENTS as el } from './elements';
import { USERDATA } from './userData';

class register{

    fazerLogin(){
        cy.wait(2000);
        cy.get('#nav-link-accountList').click();
        cy.get('#ap_email').type(USERDATA.email).tab();
        cy.get('.a-button-inner > #continue').click();
        cy.get(el.passwd).type(USERDATA.password)
        cy.get('#signInSubmit').click()
    }

    fazerCadastro(){
        cy.get('#nav-link-accountList-nav-line-1').click();
        cy.get('#createAccountSubmit').click();

        cy.get(el.name).type(USERDATA.name);
        cy.get(el.email).type(USERDATA.email).tab();
        cy.get(el.passwd).type(USERDATA.password).tab();
        cy.get(el.passwdCheck).type(USERDATA.password).tab();
    

        cy.get('#continue').click();
    }

   
}

export default new register();