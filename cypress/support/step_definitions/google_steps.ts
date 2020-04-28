/// <reference types="Cypress" />

import { Given, Then, When} from 'cypress-cucumber-preprocessor/steps';
import GooglePage from '../page_objects/google_page';
import { googleData } from '../page_data/google_data';

const googlePage = new GooglePage();

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
});

Given('que eu acesso a página principal do Google', () => {
    cy.viewport(1366, 768);
    cy.visit('/');

    googlePage.logoHome();   
});

When("eu preencher o campo de pesquisa", () => {
    googlePage.fillSearchTerm(googleData.home.searchTermWithResults);
});

When('eu clicar no botão de pesquisa', () => {
    googlePage.clickSearchButton();
});

Then('eu devo ser redirecionado para a página de resultados', () => {
    googlePage.shouldRedirectToResults();
});