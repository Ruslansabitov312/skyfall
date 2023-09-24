import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Profile } from '@/entities/Profile';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { $api } from '@/shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
    id: '1',
    firstname: 'Ruslan',
    lastname: 'Sabitov',
    age: 25,
    currency: Currency.SOM,
    country: Country.Kyrgyzstan,
    city: 'Bishkek',
    username: 'sabitoff',
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: {
                id: '1',
                username: 'sabitoff',
            },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};

describe('features/EditableProfileCard', () => {
    test('Режим readonly должен переключиться', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        );
        expect(
            screen.getByTestId('EditableProfileCardHeader.CancelButton'),
        ).toBeInTheDocument();
    });

    test('При отмене значения должны отменяться', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        // Нажали кнопку редактировать(editBtn)
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        );
        // Очистили инпуты
        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));
        // Ввели новые значения
        await userEvent.type(
            screen.getByTestId('ProfileCard.firstname'),
            'newText',
        );
        await userEvent.type(
            screen.getByTestId('ProfileCard.lastname'),
            'newText',
        );
        // Убедились в том что они ввелись
        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue(
            'newText',
        );
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue(
            'newText',
        );
        // Нажали кнопку отмены(cancelBtn)
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.CancelButton'),
        );
        // Перепроверяем что после отмены у нас подставились старые значения инпутов
        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue(
            'Ruslan',
        );
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue(
            'Sabitov',
        );
    });

    test('Должна появиться ошибка', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        );
        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.SaveButton'),
        );

        expect(
            screen.getByTestId('EditableProfileCard.Error.Paragraph'),
        ).toBeInTheDocument();
    });

    test('Если нет ошибок валидации, то на сервер должен уйти PUT запрос', async () => {
        const mockPutReq = jest.spyOn($api, 'put');
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton'),
        );
        await userEvent.type(
            screen.getByTestId('ProfileCard.firstname'),
            'newText',
        );
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.SaveButton'),
        );

        expect(mockPutReq).toHaveBeenCalled();
    });
});
