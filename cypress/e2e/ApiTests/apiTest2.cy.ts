"use strict";

describe('API Task 2', () => {
    const apiUrl = 'https://exchange.da-desk.com/agency-api/1.1/search/masterCostItems';
    const token = '123'; //
      it('Should check GET response code and authentication failure redirection', () => {
      cy.request({
        method: 'GET',
        url: `${apiUrl}?name=test&token=${token}&serviceId=web/edge&serviceVersion=1.5.18.2`,
        failOnStatusCode: false
      }).then((response) => {        
        expect(response.status).to.eq(401);                
        if (response.headers.hasOwnProperty('location')) {
            const locationHeader = response.headers['location'];
            expect(locationHeader).to.include('/authentication-failed');
          } else {            
            cy.log('Location header not found in response. No redirection.......');
          }
      });
    });
    
    it('Should check different results for different "name" parameters', () => {     
      const namesArray = ['Vipul', 'Jhon', 'Warner'];
      cy.wrap(namesArray).each((name) => {
        cy.request({
          method: 'GET',
          url: `${apiUrl}?name=${name}&token=${token}&serviceId=web/edge&serviceVersion=1.5.18.2`,
          failOnStatusCode: false
        }).then((response) => {          
          expect(response.status).to.eq(401);
          if (response.headers.hasOwnProperty('location')) {
            const locationHeader = response.headers['location'];
            expect(locationHeader).to.include('/authentication-failed');
          } else {            
            cy.log('Location header not found in response. No redirection.....');
          }
        });
      });
    });
  });