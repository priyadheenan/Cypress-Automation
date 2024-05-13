"use strict";

describe('API Task 3', () => {
    it('Description: Write tests in Cypress which are checking non-public API', () => {
        cy.request({
            method:'GET', 
            url:'https://exchange.da-desk.com/agency-api/1.1/search/masterCostItems',
            failOnStatusCode: false
        })
        .then((response) => {          
          cy.log(`Status Code: ${response.status}`);
          if (response.headers.hasOwnProperty('date')) {
             const dateHeader = new Date(response.headers['date'] as string);
             const formattedDateIST = dateHeader.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
             //const formattedDateUserTimeZone = new Intl.DateTimeFormat(undefined, { timeZone: 'auto' }).format(dateHeader);
             cy.log(`Date IST: ${formattedDateIST}`);            
             //cy.log(`Date USER Time Zone: ${formattedDateUserTimeZone}`);            
          } else {           
            cy.log('Date Header not found in response.');
          }                            
        });  
      })
  })