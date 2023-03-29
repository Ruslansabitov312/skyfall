import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from 'shared/ui/Modal/Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi atque beatae consequatur culpa cupiditate dicta distinctio doloremque eligendi, eum ex excepturi in minima nemo neque nisi, numquam optio provident quaerat quisquam repellendus, saepe sed sunt tempore tenetur ut vero! At consequuntur corporis cupiditate eveniet molestias quod repellendus ullam ut?',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi atque beatae consequatur culpa cupiditate dicta distinctio doloremque eligendi, eum ex excepturi in minima nemo neque nisi, numquam optio provident quaerat quisquam repellendus, saepe sed sunt tempore tenetur ut vero! At consequuntur corporis cupiditate eveniet molestias quod repellendus ullam ut?',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
