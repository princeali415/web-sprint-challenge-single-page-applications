describe('Testing App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    const textName = () => cy.get('input[name=name]')
    const textInstruct = () => cy.get('input[name=special_instructions]')
    const size = () => cy.get('select[name=size]')
    const multipleToppings = () => cy.get('input[type=checkbox]')
    const pepperoni = () => cy.get('input[name=pepperoni]')
    const diced_tomatoes = () => cy.get('input[name=diced_tomatoes]')
    const black_olives = () => cy.get('input[name=black_olives]')
    const artichoke = () => cy.get('input[name=artichoke]')
    const submitBtn = () => cy.get('#submitBtn')

    it('Typing in textInput', () => {
        textName()
            .should('have.value', '')
            .type('yayasyas')
            .should('have.value', 'yayasyas')
        textInstruct()
            .should('have.value', '')
            .type('yayasyas')
            .should('have.value', 'yayasyas')
        
    })

    it('multipleToppings', () => {
        multipleToppings()
        pepperoni().click().should('be.checked')
        diced_tomatoes().click().should('be.checked')
        black_olives().click().should('be.checked')
        artichoke().click().should('be.checked')
    })

    describe('Testing Submit Button', () => {
        it('Button Test', () => {
            textName()
                .should('have.value', '')
                .type('yayasyas')
                .should('have.value', 'yayasyas')
            textInstruct()
                .should('have.value', '')
                .type('yayasyas')
                .should('have.value', 'yayasyas')
            size()
                .select('1')
            submitBtn()
                .should('be.enabled')
                .click()
                .should('be.disabled')
        })
    })
})