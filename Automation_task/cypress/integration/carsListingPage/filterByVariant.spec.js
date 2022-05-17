import ListingPage from "../../support/pagesObject/ListingPage"
import ListingPageSelectors from "../../support/Selectors/ListingPageSelectors"
const variant = 'kamera'
let resultsList = []

describe("Filter cars by variant word ", function () {
    const listingPage = new ListingPage();
    it("Navigate to the cars listing page", function () {
        cy.navigateToListingPage();
    });
    it(`Filter car by variant ${variant} `, function () {
        cy.get(ListingPageSelectors.variantTextBox).type(variant)
        cy.get(ListingPageSelectors.variantTextBox).should('have.value', variant)
        cy.get(ListingPageSelectors.activeFilters).should('contain', variant)
        listingPage.collectResults(resultsList, 'resultsTiles')
    });
    it(`Verify all results include ${variant}`, function () {
        resultsList.forEach(element => {
            cy.expect(element.toLowerCase()).to.include(variant.toLowerCase())
        })
    });
});