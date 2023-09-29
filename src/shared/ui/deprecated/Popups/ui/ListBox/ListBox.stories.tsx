import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 150 }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
    <ListBox {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    value: 'click',
    items: [
        { content: 'dsadasdasdas', value: '123' },
        { content: 'dsadasdaddsasaf', value: '32231' },
    ],
};

export const topLeft = Template.bind({});
topLeft.args = {
    value: 'click',
    direction: 'top left',
    items: [
        { content: 'dsadasdasdas', value: '123' },
        { content: 'dsadasdaddsasaf', value: '32231' },
    ],
};

export const topRight = Template.bind({});
topRight.args = {
    value: 'click',
    direction: 'top right',
    items: [
        { content: 'dsadasdasdas', value: '123' },
        { content: 'dsadasdaddsasaf', value: '32231' },
    ],
};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
    value: 'click',
    direction: 'bottom left',
    items: [
        { content: 'dsadasdasdas', value: '123' },
        { content: 'dsadasdaddsasaf', value: '32231' },
    ],
};

export const bottomRight = Template.bind({});
bottomRight.args = {
    value: 'click',
    direction: 'bottom right',
    items: [
        { content: 'dsadasdasdas', value: '123' },
        { content: 'dsadasdaddsasaf', value: '32231' },
    ],
};
