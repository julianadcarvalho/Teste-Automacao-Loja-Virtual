
class browser{
    abrirBrowser(){
    cy.visit('https://www.amazon.com.br/')
    cy.contains('Amazon')
    }
}

export default new browser();