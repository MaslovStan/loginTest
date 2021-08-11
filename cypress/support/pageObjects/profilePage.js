import BasePage from './basePage';

class ProfilePage extends BasePage {
    get title(){
        return cy.get('h2')
    }
    get subHeaderMessage(){
        return cy.get('h4')
    }
    get successMessage(){
        return cy.get('#flash')
    }
    get seleniumLink(){
        return cy.get('[href="http://elementalselenium.com/"]')
    }
    get gitHubLink(){
        return cy.get('[alt="Fork me on GitHub"]')
    }
    get logoutBnt(){
        return cy.get('.button')
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


}

export default new ProfilePage();