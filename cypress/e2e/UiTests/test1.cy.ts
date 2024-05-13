/// <reference types="cypress-xpath" />
"use strict";

import 'cypress-xpath';
const baseUrl = Cypress.config('baseUrl');

describe('Task 1', () => {
    it('Description: Write tests in Cypress which will select correct MCI', () => {
      cy.visit(`${baseUrl}/dashboard`)
      cy.get('#search-box-mcis').type('Agency Fee').wait(2000)
      cy.xpath('//ul//li[1]//a').click({ multiple: false , force : true})    
      cy.get('#search-box-mcis').should('have.value','Agency Fee')     
      })
  })