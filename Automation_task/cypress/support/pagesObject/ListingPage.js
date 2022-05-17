import ListingPageSelectors from "../Selectors/ListingPageSelectors"
class ListingPage {
    /**
     * 
    function to verify that the listing page loaded successfully
     */
    verifyPageLoaded() {
        cy.get(ListingPageSelectors.filtersDiv).should('be.visible')
        cy.get(ListingPageSelectors.resultsTiles).should('be.visible')
        cy.get(ListingPageSelectors.sortBy).should('be.visible')
    }
    /**
     * Function to choose from different combo boxes on listing page
     * comboBox : name of combo box alias in the listing page selectors
     * itemText : text value of the option that we want to choose
     */
    clickAndChooseFromDropDown(comboBox, itemText) {
        cy.get(ListingPageSelectors[comboBox]).click()
        cy.get(ListingPageSelectors.dropDownElements).contains(itemText).click()
        cy.get(ListingPageSelectors[comboBox]).should('have.value', itemText)
    }
    /**
     * Function to collect text results from the car cards in listing page
     * list : list empty initialy to fill with the results
     * parameter : name of the alias in the listing page selectors
     */
    collectResults(list, parameter) {
        cy.get(ListingPageSelectors[parameter]).each(($li) => {
            list.push($li.text())
        })
    }
}
export default ListingPage