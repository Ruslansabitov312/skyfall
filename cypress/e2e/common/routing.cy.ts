import { selectByTestId } from '../../helpers/selectByTestId';

describe('Роутинг', () => {
    describe('Пользователь НЕ авторизован', () => {
        it('Переход на главную страницу', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });

        it('Пользователь открывает страницу профиля', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });

        it('Пользователь открывает несуществующий маршрут', () => {
            cy.visit('/dksjakl');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });

    describe('Пользователь авторизован', () => {
        beforeEach(() => {
            cy.login(); // данные для входа указан по умолучанию(support/commands/login.ts)
        });

        it('Пользователь открывает страницу профиля', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });

        it('Пользователь открывает страницу со списком статей', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
});
