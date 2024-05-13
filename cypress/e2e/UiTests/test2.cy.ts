/// <reference types="cypress-xpath" />
"use strict";

import 'cypress-xpath';
const baseUrl = Cypress.config('baseUrl');

describe('Task 2', () => {
  it('Description: Write tests in Cypress which will select any Annotation from the list', () => {
    cy.visit(`${baseUrl}/dashboard`)
    cy.get('#search-box-mcis').type('Agency Fee').wait(2000)
    cy.xpath('//ul//li[1]//a').click({ multiple: false , force : true})    
    cy.get('#search-box-mcis').should('have.value','Agency Fee')
    cy.get('#search-box-annotations').type('Drydoc').wait(2000)
    cy.xpath('//ul[@class="search-result"]//li//a[contains(text(),"Drydock")]').click({ multiple: false , force : true})    
    cy.get('#search-box-annotations').should('have.value','Drydock')
    cy.get('#master-cost-input').type('500').wait(2000)  
    cy.xpath('//button[contains(text(),"Add")]').click({force:true})

    cy.get('#search-box-mcis').type('Agency Fee').wait(2000)
    cy.xpath('//ul//li[1]//a').click({ multiple: false , force : true})    
    cy.get('#search-box-mcis').should('have.value','Agency Fee')
    cy.get('#search-box-annotations').type('Externa').wait(2000) 
    cy.xpath('//ul[@class="search-result"]//li//a[contains(text(),"External")]').click({ multiple: false , force : true})    
    cy.get('#search-box-annotations').should('have.value','External')  
    cy.get('#master-cost-input').type('500').wait(2000)
    cy.xpath('//button[contains(text(),"Add")]').click({force:true})

    cy.get('#search-box-mcis').type('Agency Fee').wait(2000)
    cy.xpath('//ul//li[1]//a').click({ multiple: false , force : true})    
    cy.get('#search-box-mcis').should('have.value','Agency Fee')
    cy.get('#search-box-annotations').type('Interna').wait(2000)
    cy.xpath('//ul[@class="search-result"]//li//a[contains(text(),"Internal")]').click({ multiple: false , force : true})    
    cy.get('#search-box-annotations').should('have.value','Internal')  
    cy.get('#master-cost-input').type('500').wait(2000)
    cy.xpath('//button[contains(text(),"Add")]').click({force:true})

    cy.get('#search-box-mcis').type('Agency Fee').wait(2000)
    cy.xpath('//ul//li[1]//a').click({ multiple: false , force : true})    
    cy.get('#search-box-mcis').should('have.value','Agency Fee')
    cy.get('#search-box-annotations').type('Transportation').wait(2000) 
    cy.xpath('//ul[@class="search-result"]//li//a[contains(text(),"Transportation")]').click({ multiple: false , force : true})    
    cy.get('#search-box-annotations').should('have.value','Transportation')  
    cy.get('#master-cost-input').type('500').wait(2000) 
    cy.xpath('//button[contains(text(),"Add")]').click({force:true})   
    })
})