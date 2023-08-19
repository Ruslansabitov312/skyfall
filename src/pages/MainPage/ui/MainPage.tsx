import React from 'react';
import { useTranslation } from 'react-i18next';
import { HStack } from 'shared/ui/Stack';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Page } from 'widgets/Page/Page';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            {t('Главная страница')}
            <div>dsadsa</div>
            <HStack>
                <div>dsadsa</div>
                <ListBox
                    defaultValue="Выберите значение"
                    onChange={(value: string) => {}}
                    value={undefined}
                    items={[
                        { value: '1', content: '111' },
                        { value: '2', content: '222', disabled: true },
                        { value: '3', content: '333' },
                    ]}
                />
            </HStack>
            <div>dsadsa</div>
            <div>dsadsa</div>
            <div>dsadsa</div>
            <div>dsadsa</div>
            <div>dsadsa</div>

        </Page>
    );
};

export default MainPage;
