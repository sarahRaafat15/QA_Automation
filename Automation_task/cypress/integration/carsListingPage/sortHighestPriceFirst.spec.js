import ListingPage from "../../support/pagesObject/ListingPage"
import common_functions from "../../support/common_functions"
var prices = []

describe("Sort cars by price descendingly", function () {
    const listingPage = new ListingPage();

    it("Navigate to the cars listing page", function () {
        cy.navigateToListingPage();
    });
    it("Sort Cars descendingly by price", function () {
        listingPage.clickAndChooseFromDropDown('sortBy', 'Höchster Preis/Rate');
        listingPage.collectResults(prices, 'totalPrice')
    });
    it("Verify cars are sorted descendingly by price", function () {
        cy.expect(common_functions.verifySortedNumericList(prices, 'desc')).to.be.true
    });
});