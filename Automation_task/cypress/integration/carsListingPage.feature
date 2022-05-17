Feature: Cars listing page
  
	As a visitor of instamotion website
	I want to see,filter and sort cars
	So that I can select a car that fits my needs

  Scenario: Filter cars by brand and model
    Given I am in the cars listing page
    When  I filter cars by a specifci brand and model
    Then  The active filters should  include this brand and model
    And   All the related results should include this brand and model

  Scenario: Filter cars by variante word
    Given I am in the cars listing page
    When  I type a variant to filter by 
    Then  The active filters should include this variant
    And   All the related results should include this variant

  Scenario: Sort cars by price descendingly
    Given I am in the cars listing page
    When  I sort cars by highest price first
    Then all the results should be sorted descendingly according to price

