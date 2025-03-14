/// <reference types="cypress" />
import summaryPage from '../../support/pages/summaryPage';
import socialConnectPage from '../../support/pages/socialConnectPage';

const login_credentials = require('/cypress/fixtures/credentials.json')
const uname = login_credentials.username
const pwd = login_credentials.password
describe('Spikerz Demo - [Adding Social Account]', () => {
  
  it('[Login]: Validate User is not able to Login using invalid username', () => {
    cy.InvalidUserNameLogin(pwd)
  })

  it('[Social Account] Validate user is able to add YouTube account to the platform', () => {
    //Login to application
    cy.UserLogin(uname,pwd)

    // 2. Navigate to Social Account Settings
    summaryPage.go_to_summary_page()
    
    // 3. Initiate YouTube Connection
    cy.window().then((win) => {
      const openStub = cy.stub(win, 'open').as('windowOpen');
      // cy.stub(win, 'open').as('windowOpen');

      summaryPage.go_to_social_connect_page()
      socialConnectPage.connect_youtube()
    
      cy.get('@windowOpen').should('be.calledOnce');
      cy.then(()=>{
        const args = openStub.args[0]
        cy.log('Arguments:', args);

        const url = args[0]; // Get the URL
        const target = args[1]; // Get the target
        const features = args[2]; // Get the features

        cy.log('URL:', url);
        cy.log('Target:', target);
        cy.log('Features:', features);

        cy.get('@windowOpen').should('be.calledWith', url);

        cy.visit(url)

        cy.origin('https://accounts.google.com/', () => {
          // All commands within this block will run in the https://accounts.google.com origin.
          cy.get('input[type="email"]').type('chweyaacharles@gmail.com', { delay: 100 });
          cy.wait(3000)
          cy.get('#identifierNext').click();
          // //add wait for the password field to load.
          // cy.get('input[type="password"]', { timeout: 10000 }).should('be.visible').type('your_password');
          // cy.get('#passwordNext').click();
        });
      })
    });
  });
});