import ListingPage from "../../support/pagesObject/ListingPage"
import ListingPageSelectors from "../../support/Selectors/ListingPageSelectors"
const brand = 'BMW',
    model = '116'
let names = []

describe("Filter cars by brand and model", function () {
    const listingPage = new ListingPage();

    it("Navigate to the cars listing page", function () {
        cy.navigateToListingPage();
    });
    it(`Filter car by brand ${brand} and model ${model}`, function () {
        listingPage.clickAndChooseFromDropDown('brandFilter', brand);
        listingPage.clickAndChooseFromDropDown('modelFilter', model);
        cy.get(ListingPageSelectors.activeFilters).should('contain', brand)
        cy.get(ListingPageSelectors.activeFilters).should('contain', model)
        listingPage.collectResults(names, 'carName')
    });
    it(`Verify all results include ${brand} and ${model}`, function () {
        names.forEach(name => {
            cy.expect(name).to.include(brand)
            cy.expect(name).to.include(model)
        })
    });
});