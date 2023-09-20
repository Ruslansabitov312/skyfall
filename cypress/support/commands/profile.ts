export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
    cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'lorem' },
        body: {
            id: '4',
            firstname: 'test',
            lastname: 'user',
            age: 24,
            currency: 'USD',
            country: 'Ukraine',
            city: 'Bishkek',
            username: 'testuser',
            avatar: 'https://cdn-icons-png.flaticon.com/512/2503/2503707.png',
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname: string, lastname: string): Chainable<void>

            resetProfile(profileId: string): Chainable<void>
        }
    }
}
