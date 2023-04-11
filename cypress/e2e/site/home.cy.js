/// <reference types="cypress" />

describe('Testes para a homepage', () => {
    it('Deve renderizar 4 vagas', () => {
        cy.visit("https://calculadoraimc-six.vercel.app/")
        // cy.get('.lista li').should('have.length', 4)
        cy.get('.titulo-sm.text-left').first().should('have.text', 'Cálculo IMC')
        // cy.get('.lista li').last().should('have.text', 'Walk the dog')
    })
})

// npm run cypress open