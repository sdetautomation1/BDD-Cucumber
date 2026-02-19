Feature: Login Feature

    As a registred user i want to login to the system.
    Scenario: Login with valid credentials
        Given User is on the home page
        And user click on login link
        When user enters valid username as "bipin1234"
        And user enters valid password as "Password_1234"
        Then click on login btn
        And login shall be sucessfull
    