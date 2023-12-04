/// <reference types="cypress" />

import browser from "../support/pages/browser/browser";
import register from "../support/pages/login/register";
import buy from "../support/pages/buy/pesquisarComprar";

describe('shopping', () => {

  it('devem renderizar o browser', () => {
      browser.abrirBrowser();
  })

  it('Clicar em LOGIN renderizar pagina e efetuar login', () => 
    {
     register.fazerLogin();
    //  register.fazerCadastro();
     
  })

  it('Deve pesquisar por item e adicionar no carrinho, e limpando o carrinho posteriomente fazer logout', () => {
    buy.pesquisarAdicionar();
    buy.fazerLogout();
  })

})
