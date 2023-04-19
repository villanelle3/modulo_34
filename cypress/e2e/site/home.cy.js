/// <reference types="cypress" />

describe('Testes para a homepage', () => {
    it('Deve renderizar texto correto', () => {
        cy.visit("https://agenda-contatos-react.vercel.app/")
        cy.get('h1').first().should('have.text', 'Agenda de  contatos')
    })
})

describe('Lista de contatos', () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app/")
    })
    it('Adiciona contato com sucesso', () => {
        cy.get('input[placeholder*="Nome"]').should('be.visible').type('Luiz Doe')
        cy.get('input[placeholder*="E-mail"]').should('be.visible').type('luiz-doe@example.com')
        cy.get('input[placeholder*="Telefone"]').should('be.visible').type('11912345678')
        cy.get('button[type="submit"]').should('be.visible').click()
    })
})

describe('Editar contato', () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app/")
    })
    it('Edita contato com sucesso', () => {
        cy.get('.edit').should('be.visible').first().click()
        cy.get('input[placeholder*="Nome"]').should('be.visible').type('Antonio Novo')
        cy.get('input[placeholder*="E-mail"]').should('be.visible').type('novoemail@example.com')
        cy.get('button[type="submit"]').should('be.visible').click()
    })
})

// npm run cypress open