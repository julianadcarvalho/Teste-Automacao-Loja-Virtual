class buy{

    pesquisarAdicionar(){
        cy.get('#twotabsearchtextbox').type('Lego Star Wars Millennium Falcon 75257')
        cy.get('#nav-search-submit-button').click()
        

        cy.get('[data-asin="B07Q2TQ48F"] > .sg-col-inner > .s-widget-container > [data-action="puis-card-container-declarative"] > .puis-card-container').click();
        cy.wait(4000);
        cy.get('#add-to-cart-button').click()

        // //alterar quantidade no carrinho
        cy.get('#sw-gtc > .a-button-inner > .a-button-text').click()
        cy.wait(4000);
        cy.get('.a-dropdown-label').select('2');
        
        //excluir itens do carrinho
        cy.get('#sw-gtc > .a-button-inner > .a-button-text').click()
        cy.get('.sc-action-delete > .a-declarative > .a-color-link').click();

        cy.contains('Seu carrinho de compras da Amazon está vazio.');
    }

    fazerLogout(){

        cy.get('#nav-link-accountList-nav-line-1').trigger('mouseover').select('Sair da conta');

    }  
}

export default new buy();