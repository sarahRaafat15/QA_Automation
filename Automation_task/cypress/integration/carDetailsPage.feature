Feature: Car details page


	As a visitor of instamotion website
	I want to see the details and specifications of the car
	So that I know if the car fits my needs

  Scenario: Opening a car details page
    Given I am in the cars listing page
    When  I click on a specific car card
    Then I am on the selected car details page 
    And I can see details and specifications of this car

