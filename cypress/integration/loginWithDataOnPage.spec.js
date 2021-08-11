import LoginPage from '../support/pageObjects/loginPage';
import ProfilePage from '../support/pageObjects/profilePage';

let username;
let passwors;

describe('SHOULD LOGIN TO FROFILE WITH CREDENTIALS ON PAGE',()=>{
    
    it('Should open login page',()=>{
        LoginPage.open();
        cy.url().should('contain','login');
    })  
    it('Should save username from text',()=>{
        LoginPage.currentUsername.then(($el) => {
          username = $el.text();
        })
    }) 
    it('Should save password from text',()=>{
        LoginPage.currentPassword.then(($el) => {
          passwors = $el.text();
        })
    })  
    it('should login with current username and password',()=>{
        LoginPage.login(username,passwors)
        ProfilePage.successMessage.should('contain','You logged into a secure area!')
    })    
})