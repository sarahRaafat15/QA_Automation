Feature: Payment 

	As a visitor of instamotion website
	I want to be able to choose a payment method
	So that I can get the car that I want

  Scenario: Making a request
    Given I am in a car details page
    When  I click on start request button
    Then I can see the total price of the car and the minimum monthly installment
    And I can choose between funding and online transfer
