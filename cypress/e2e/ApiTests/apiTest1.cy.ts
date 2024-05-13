"use strict";

describe('API Task 1', () => {
    it('Description: Write tests in Cypress which are checking public API -> https://exchange.da-desk.com/agency-api/1.1/info ', () => {
        cy.request('GET', 'https://exchange.da-desk.com/agency-api/1.1/info')
        .then((response) => {
          expect(response.status).to.eq(200);
          cy.log(JSON.stringify(response.body));         
          cy.log(response.body.name)
          cy.log(response.body.telephone)
          cy.log(response.body.fax)
          cy.log(response.body.email)
          const contentType = response.headers['content-type'];
          cy.log(`Content-Type: ${contentType}`);
          expect(response.body.name).to.not.be.null
          expect(response.body.telephone).to.not.be.null
          expect(response.body.fax).to.not.be.null
          expect(response.body.email).to.not.be.null
          expect(contentType).to.include('application/json');         
        });  
      })
  })