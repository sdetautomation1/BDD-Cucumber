Feature: Login Feature

    As a registred user i want to login to the system.
    Scenario Outline: Login with valid credentials
        Given User is on the home page
        And user click on login link
        When user enters valid username as "<userName>"
        And user enters valid password as "<password>"
        Then click on login btn
        And login shall be sucessfull

    Examples:
        | userName  | password  |
        | bipin1234   | Password_1234   |
        | bipin4321   | Password_1234   |
    