import BasePage from './basePage';

class LoginPage extends BasePage {

    get title(){
        return cy.get('h2')
    }
    get subheaderText(){
        return cy.get('h4')
    }
    get userNameTitle(){
        return cy.get('[for="username"]')
    }
    get userNameField(){
        return cy.get('#username')
    }
    get passwordTitle(){
        return cy.get('[for="password"]')
    }
    get passwordField(){
        return cy.get('#password')
    }
    get loginBtn(){
        return cy.get('[type="submit"]')
    }
    get selemiumLink(){
        return cy.get('[href="http://elementalselenium.com/"]')
    }
    get gitHubLink(){
        return cy.get('[href="https://github.com/tourdedave/the-internet"]')
    }
    get selemiumText(){
        return cy.get('#page-footer').children().children()
    }
    get gitHubText(){
        return cy.get('[alt="Fork me on GitHub"]')
    }
    get loginMessage(){
        return cy.get('#flash')
    }
    get usernameValue(){
        return cy.get('h4').eq(1)
    }
    get passwordValue(){
        return cy.get('h4').eq(2)
    }
    get currentUsername(){
        return cy.get('h4').find('em').eq(0);
    }
    get currentPassword(){
        return cy.get('h4').find('em').eq(1);
    }

    login(username,password){
        this.userNameField.type(username);
        this.passwordField.type(password);
        this.loginBtn.click();
    }

open(path){
    return super.open('login')
}

}

export default new LoginPage();