import LoginPage from '../support/pageObjects/loginPage';
import ProfilePage from '../support/pageObjects/profilePage';

describe('SHOULD LOGIN TO FROFILE',()=>{

    it('Should open login page',()=>{
        LoginPage.open();
        cy.url().should('contain','login');
    })    
    it('should input username',()=>{
        LoginPage.userNameField.type('tomsmith')
        .should('have.value', 'tomsmith');
    })
    it('should input password',()=>{
        LoginPage.passwordField.type('SuperSecretPassword!')
        .should('have.value', 'SuperSecretPassword!');
    })
    it('should click login button and login to profile',()=>{
        LoginPage.loginBtn.click();
        ProfilePage.successMessage.should('contain','You logged into a secure area!')
    })   
    it('should verify correct url',()=>{
        cy.url().should('contain','/secure')
    })    
})

describe('LOGOUT FROM PROFILE',()=>{
    it('should click logout button',()=>{
        ProfilePage.logoutBnt.click()
        LoginPage.loginMessage.should('contain','You logged out of the secure area!')
    })
})