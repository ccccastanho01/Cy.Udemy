describe('Execução de Testes - Curso Cypress / Udemy', function() {
    beforeEach(function(){
        cy.visit('./src/index.html')
    })
    it('verifica o título da aplicação', function() {
        
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })
    it('preenche os campos obrigatórios e envia o formulário', function(){
        const LongText = 'Eu, Caio tenho 33 anos, nasci em 27 de julho de 1989.'
        cy.get('#firstName').type('Caio')
        cy.get('#lastName').type('Castanho')
        cy.get('#email').type('caio@gmail.com')
        cy.get('#open-text-area').type(LongText, {delay: 0})
        cy.contains('button', 'Enviar').click()
        cy.get('.success').should('be.visible')
    })
    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function(){
        cy.get('#firstName').type('Caio')
        cy.get('#lastName').type('Castanho')
        cy.get('#email').type('caio@gmail,com')
        cy.get('#open-text-area').type('Teste')
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')
  })
  it('campo telefone continua vazio com valor não-numérico', function(){
    cy.get('#phone')
    .type('abcdefghij')
    .should('have.value', '')
})
it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function(){
        cy.get('#firstName').type('Caio')
        cy.get('#lastName').type('Castanho')
        cy.get('#email').type('caio@gmail.com')
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area').type('Teste')
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')
})
it('preenche e limpa os campos nome, sobrenome, email e telefone', function(){
    cy.get('#firstName').type('Caio').should('have.value', 'Caio').clear().should('have.value','')
    cy.get('#lastName').type('Castanho').should('have.value', 'Castanho').clear().should('have.value','')
    cy.get('#email').type('caio@gmail.com').should('have.value', 'caio@gmail.com').clear().should('have.value','')
    cy.get('#phone').type('987456123').should('have.value', '987456123').clear().should('have.value','')
})
it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function(){
    cy.contains('button', 'Enviar').click()
    cy.get('.error').should('be.visible')})

it('seleciona um produto (YouTube) por seu texto', function(){
    cy.get('#product').select('YouTube').should('have.value', 'youtube')
})
it('seleciona um produto (Mentoria) por seu valor (value)', function(){
    cy.get('#product').select('mentoria').should('have.value', 'mentoria')
})
it('seleciona um produto (Blog) por seu índice', function(){
    cy.get('#product').select(1).should('have.value', 'blog')
})
it('marca o tipo de atendimento "Feedback"', function(){
    cy.get('input[type="radio"][value="feedback"]').check().should('have.value', 'feedback')
})
it('marca cada tipo de atendimento', function(){
    cy.get('input[type="radio"]')
    .should('have.length', 3)
    .each(function($radio){
        cy.wrap($radio).check().should('be.checked')
        
    })
})
it('marca ambos checkboxes, depois desmarca o último', function(){
    cy.get('input[type="checkbox"]')
    .check()
    .should('be.checked')
    .last()
    .uncheck()
    .should('not.be.checked')
})
it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function(){
    cy.get('#firstName').type('Caio')
    cy.get('#lastName').type('Castanho')
    cy.get('#email').type('caio@gmail.com')
    cy.get('#phone-checkbox').check()
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
    cy.get('.error').should('be.visible')
})
it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function(){
  cy.get('#privacy a').should('have.attr', 'target', '_blank')
}) 
it('acessa a página da política de privacidade removendo o target e então clicando no link', function(){
    cy.get('#privacy a').invoke('removeAttr', 'target')
    .click()
    cy.contains('Talking About Testing').should('be.visible')
}) 
})