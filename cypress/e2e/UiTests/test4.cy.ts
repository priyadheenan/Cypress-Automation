/// <reference types="cypress-xpath" />
"use strict";

import 'cypress-xpath';
const baseUrl = Cypress.config('baseUrl');

const log = cy.log
//Case 4
describe('Task 4', () => {
  let globalVariable:String
  it('Description: Write tests in Cypress which will check Total', () => {
    cy.visit(`${baseUrl}/dashboard`)
    cy.get('#search-box-mcis').type('Agency Fee').wait(2000)
    cy.xpath('//ul//li[1]//a').click({ multiple: false , force : true})    
    cy.get('#search-box-mcis').should('have.value','Agency Fee')
    cy.get('#search-box-annotations').type('Drydoc').wait(2000)
    cy.xpath('//ul[@class="search-result"]//li//a[contains(text(),"Drydock")]').click({ multiple: false , force : true})    
    cy.get('#search-box-annotations').should('have.value','Drydock')
    cy.get('#master-cost-input').type('222').wait(2000)  
    cy.get('#master-cost-usd-rate').clear().type('80.53999999999999').wait(1000)
    cy.get('#master-cost-input').invoke('val').then((Valuetext)=>{
      log('INR : ', Valuetext)
    })
   cy.get('#master-cost-usd-rate').invoke('val').then((Valuetext)=>{
      log('US $ Rate : ', Valuetext)
    })
    cy.xpath('//button[contains(text(),"Add")]').click({force:true}).wait(1000)

    cy.get('#search-box-mcis').type('Agency Fee').wait(2000)
    cy.xpath('//ul//li[1]//a').click({ multiple: false , force : true})    
    cy.get('#search-box-mcis').should('have.value','Agency Fee')
    cy.get('#search-box-annotations').type('Externa').wait(2000) 
    cy.xpath('//ul[@class="search-result"]//li//a[contains(text(),"External")]').click({ multiple: false , force : true})    
    cy.get('#search-box-annotations').should('have.value','External')  
    cy.get('#master-cost-input').type('222').wait(2000)
    cy.get('#master-cost-usd-rate').clear().type('80.53999999999999').wait(1000)
    cy.get('#master-cost-input').invoke('val').then((Valuetext)=>{
      log('INR : ', Valuetext)
    })
    cy.get('#master-cost-usd-rate').invoke('val').then((Valuetext)=>{
      log('US $ Rate : ', Valuetext)
    })
    cy.xpath('//button[contains(text(),"Add")]').click({force:true}).wait(1000)
   
    cy.get('#search-box-mcis').type('Agency Fee').wait(2000)
    cy.xpath('//ul//li[1]//a').click({ multiple: false , force : true})    
    cy.get('#search-box-mcis').should('have.value','Agency Fee')
    cy.get('#search-box-annotations').type('Transportatio').wait(2000) 
    cy.xpath('//ul[@class="search-result"]//li//a[contains(text(),"Transportation")]').click({ multiple: false , force : true})    
    cy.get('#search-box-annotations').should('have.value','Transportation')  
    cy.get('#master-cost-input').type('222').wait(2000) 
    cy.get('#master-cost-usd-rate').clear().type('80.53999999999999').wait(1000)
    cy.get('#master-cost-input').invoke('val').then((Valuetext)=>{
      log('INR : ', Valuetext)
    })
    cy.get('#master-cost-usd-rate').invoke('val').then((Valuetext)=>{
      log('US $ Rate : ', Valuetext)
    })
    cy.xpath('//button[contains(text(),"Add")]').click({force:true}).wait(2000)

    cy.get('#search-box-mcis').type('Agency Fee').wait(2000)
    cy.xpath('//ul//li[1]//a').click({ multiple: false , force : true})    
    cy.get('#search-box-mcis').should('have.value','Agency Fee')
    cy.get('#search-box-annotations').type('Interna').wait(2000)
    cy.xpath('//ul[@class="search-result"]//li//a[contains(text(),"Internal")]').click({ multiple: false , force : true})    
    cy.get('#search-box-annotations').should('have.value','Internal')  
    cy.get('#master-cost-input').type('222').wait(2000)
    cy.get('#master-cost-usd-rate').clear().type('80.53999999999999').wait(1000)
    cy.get('#master-cost-input').invoke('val').then((Valuetext)=>{
      log('INR : ', Valuetext)
    })
    cy.get('#master-cost-usd-rate').invoke('val').then((Valuetext)=>{
      log('US $ Rate : ', Valuetext)
    })
    cy.xpath('//button[contains(text(),"Add")]').click({force:true}).wait(1000)
    
    cy.xpath('//th[text()="Totals"]//..//td[2]//div[2]').invoke('text').then((Valuetext)=>{
      globalVariable = Valuetext
      log('US $ Total : ', Valuetext)
    })
    .then(()=>{
      cy.wrap(globalVariable).should('not.be.undefined')
      log("Total $ ",globalVariable)
      //cy.wrap(globalVariable).should('not.be.NaN')
    })
    })   

    it('Verify the USD Total', () => {
      // Access globalVariable outside of any Cypress command
      cy.log('Global Variable Value Outside Test:', globalVariable);
      let strUSDToRemoveUSD : string[] 
      strUSDToRemoveUSD = globalVariable.split(":");
      let totalInUSD : string = strUSDToRemoveUSD[1].trim();
      cy.log(totalInUSD)
      let calculatedUSD : number= (222 /  80.53999999999999) * 4
      let calculatedUSDStr : string = calculatedUSD.toString()
      cy.log(calculatedUSDStr)

      let totalInUSDNo :number = parseFloat(totalInUSD)
      let calculatedUSDNo :number = calculatedUSD

      let differenceValue = totalInUSDNo - calculatedUSDNo;
      let differenceValueStr : string = differenceValue.toString()
      cy.log(differenceValueStr)
      //This is helper assertion to verify that USD Total value difference is less then 1
      expect(differenceValue).to.be.lessThan(0.01);
    });

})//Case 4 End