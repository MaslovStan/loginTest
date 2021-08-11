import { expect } from 'chai';
import LoginPage from '../support/pageObjects/loginPage';
import ProfilePage from '../support/pageObjects/profilePage';

describe('VERIFY ALL ELEMENTS PRESENT AND HAVE CORRECT TEXT ON LOGIN PAGE',()=>{

    it('Should open login page',()=>{
        LoginPage.open();
        cy.url().should('contain','login');
    })
    it('should display correct title',()=>{
        LoginPage.title.should('have.text','Login Page')
    })
    it('subheader should display correct text',()=>{
        LoginPage.subheaderText.should('have.text','This is where you can log into the secure area. Enter tomsmith for the username and SuperSecretPassword! for the password. If the information is wrong you should see error messages.')
    })
    it('should display correct title for username field',()=>{
        LoginPage.userNameTitle.should('have.text','Username')
    })
    it('should display correct title for password field',()=>{
        LoginPage.passwordTitle.should('have.text','Password')
    })
    it('login button is present',()=>{
        LoginPage.loginBtn.should('be.visible')
    })
    it('login button has correct text',()=>{
        LoginPage.loginBtn.should('contain','Login')
    })
    it('selenium link should be present',()=>{
        LoginPage.selemiumLink.should('be.visible')
    })
    it('GitHub link should be present',()=>{
        LoginPage.gitHubLink.should('be.visible')
    })
    it('selenium link should have correct text',()=>{
        LoginPage.selemiumText.should('have.text','Powered by Elemental Selenium')
    })
    it('GitHub link should have correct text',()=>{
        LoginPage.gitHubText.should('have.attr','alt','Fork me on GitHub')
    })
})
describe('VERIFY ALL ELEMENTS PRESENT AND HAVE CORRECT TEXT ON PROFILE PAGE',()=>{
    
    it('Should login',()=>{
        LoginPage.login('tomsmith','SuperSecretPassword!')
    })
    it('should verify correct message',()=>{
        ProfilePage.successMessage.should('contain','You logged into a secure area!')
    })
    it('should verify correct title on profile page',()=>{
        ProfilePage.title.then(($el)=>{
            expect($el.text()).to.include('Secure Area')
        })
    })
    it('should verify correct subheader text on profile page',()=>{
        ProfilePage.subHeaderMessage.then(($el)=>{
            expect($el.text()).to.include('Welcome to the Secure Area. When you are done click logout below.')
        })
    })
    it('logout button has correct text',()=>{
        ProfilePage.logoutBnt.should('contain','Logout')
    })
    it('selenium link should present',()=>{
        ProfilePage.selemiumLink.should('be.visible')
    })
    it('GitHub link should present',()=>{
        ProfilePage.gitHubLink.should('be.visible')
    })
    it('selenium link should have correct text',()=>{
        ProfilePage.selemiumText.should('have.text','Powered by Elemental Selenium')
    })
    it('GitHub link should have correct text',()=>{
        ProfilePage.gitHubText.should('have.attr','alt','Fork me on GitHub')
    })
})
