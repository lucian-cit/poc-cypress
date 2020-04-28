/// <reference types="cypress" />

import { googleElements } from "../elements/google_elements";

export default class GooglePage {

    logoHome(): void {
        cy.get(googleElements.home.logoContainer, {timeout: 30000})
            .should('be.visible');
    }

    fillSearchTerm(searchTerm: string): void {
        cy.get(googleElements.home.searchInput, {timeout: 15000})
          .should("be.visible")
          .type(searchTerm);
    }

    clickSearchButton(): void {
        cy.get(googleElements.home.searchInput, {timeout: 15000})
            .should('be.visible')
            .type('{enter}');
    }

    shouldRedirectToResults(): void {
        cy.url().should('include', '/search?');
    }
}
