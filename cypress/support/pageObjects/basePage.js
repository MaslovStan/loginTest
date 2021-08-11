export default class BasePage {
    open(path){
        return cy.visit(`https://the-internet.herokuapp.com/${path}`)
    }
}