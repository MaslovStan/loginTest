import LoginPage from '../support/pageObjects/loginPage';


describe('SHOULD SHOW ERROR MESSAGE WHEN LOGIN WITH WRONG PASSWORD',()=>{

    it('Should open login page',()=>{
        LoginPage.open();
        cy.url().should('contain','login');
    })
    
    it('login with invalid password',()=>{
        LoginPage.login('tomsmith','12345678')
        LoginPage.loginMessage.should('contain','Your password is invalid!')
    })
})

describe('SHOULD SHOW ERROR MESSAGE WHEN LOGIN WITH WRONG USERNAME',()=>{

    it('Should open login page',()=>{
        LoginPage.open();
        cy.url().should('contain','login');
    })
    
    it('login with invalid username',()=>{
        LoginPage.login('wervwevr','SuperSecretPassword!')
        LoginPage.loginMessage.should('contain','Your username is invalid!')
    })
})
describe('SHOULD SHOW ERROR MESSAGE WHEN PASSWORD FIELD IS EMPTY',()=>{

    it('Should open login page',()=>{
        LoginPage.open();
        cy.url().should('contain','login');
    })
    
    it('login with empty password',()=>{
        LoginPage.userNameField.type('tomsmith')
        LoginPage.loginBtn.click()
        LoginPage.loginMessage.should('contain','Your password is invalid!')
    })
})
describe('SHOULD SHOW ERROR MESSAGE WHEN USERNAME FIELD IS EMPTY',()=>{

    it('Should open login page',()=>{
        LoginPage.open();
        cy.url().should('contain','login');
    })
    
    it('login with empty username',()=>{
        LoginPage.passwordField.type('wecwcewce')
        LoginPage.loginBtn.click()
        LoginPage.loginMessage.should('contain','Your username is invalid!')
    })
})
describe('SHOULD SHOW ERROR MESSAGE WHEN USERNAME AND PASSWORD FIELDS ARE EMPTY',()=>{

    it('Should open login page',()=>{
        LoginPage.open();
        cy.url().should('contain','login');
    })
    
    it('login with empty fields',()=>{
        LoginPage.loginBtn.click()
        LoginPage.loginMessage.should('contain','Your username is invalid!')
    })
})