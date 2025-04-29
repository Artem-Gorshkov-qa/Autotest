describe('Проверка на успешный сценарий', function () {

    it('Проверка на успешный сценарий', function () {
         cy.visit('https://qatest.datasub.com/quote.html'); // Открыл страницу формы
         cy.get('#q_name',).type('Artem') // Ввел корректное имя
         cy.get('#q_email').type('luigisoprano@mail.ru', { force: true }) // Ввел корректный имейл
         cy.get('#q_message').type('hello') // Ввел сообщение
         cy.get('.row > :nth-child(5) > .btn').click() // Нажал на кнопку отправить
         cy.wait(3000)
         cy.get('#quoteStatus').contains('Форма отправлена успешно!'); // Проверил наличие текста, после отправки формы
     })

     it('Проверка негативного кейса', function () {
        cy.visit('https://qatest.datasub.com/quote.html'); // Открыл страницу формы
        cy.get('.row > :nth-child(5) > .btn').click() // Оставив все поля пустыми, нажал на кнопку отправить
        cy.wait(4000)
        cy.get('#quoteStatus').should('be.visible').contains('Форма отправлена успешно!'); // Проверил наличие текста, после отправки формы
    })    
 }) //.scrollIntoView().should('be.visible').click({ force: true }