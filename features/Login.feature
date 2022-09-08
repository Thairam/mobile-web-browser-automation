@login
Feature: Login
  Eu como usuário
  Gostaria de fazer Login
  Para acessar o sistema

  Background: 
    Given I'am on Login page

  @login_success
  Scenario: Login with success
    Given I fill username
    And I fill password
    When I click on Login button
    Then I see the products

  @login_error
  Scenario: Login with error
    Given I fill wrong username
    And I fill password
    When I click on Login button
    Then I see the Login error
