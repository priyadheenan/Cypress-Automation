Cypress Automation Test - Marcura

Cypress Version - Latest stable version

This includes 3 API test cases and 4 UI test cases 

API Tests:
Task 1: Description: Write tests in Cypress which are checking public API ->
https://exchange.da-desk.com/agency-api/1.1/info
Task 2: Write tests in Cypress which are checking non-public API ->
https://exchange.da-desk.com/agency-api/1.1/search/masterCostItems?name=test&token=123&serviceId=web/edge&serviceVersion=1.5.18.2
Task 3: Write tests in Cypress which are checking non-public API ->
https://exchange.da-desk.com/agency-api/1.1/search/masterCostItems


UI Test Cases:
Task 1: Write tests in Cypress which will select correct MCI(Master Cost Item)
Task 2: Write tests in Cypress which will select any Annotation from the list (see Annotations list)
Task 3: Write tests in Cypress which will add value
Task 4: Write tests in Cypress which will check Total

To run test cases,there are 2 ways.

1)To run with UI

npx cypress open

2)To run in CLI and without UI:

npx cypress run

Note: To run all the spec files at once in UI, flag "experimentalRunAllSpecs:  true" is added in the config file.
(After executing npx cypress open and selecting your preferred browser, the specs list will now have the Run {n} specs button when hovering over a directory.)

