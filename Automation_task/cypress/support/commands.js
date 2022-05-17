import ListingPage from "./pagesObject/ListingPage"

Cypress.Commands.add('acceptCookies', () => {
    cy.get('#onetrust-accept-btn-handler').click()
})
Cypress.Commands.add('navigateToListingPage', () => {
    const listingPage = new ListingPage();
    cy.visit('autos')
    cy.acceptCookies()
    listingPage.verifyPageLoaded();
})