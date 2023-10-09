import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CommentCard } from './CommentCard';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
    <CommentCard {...args} />
);

const normalArgs = {
    comment: {
        id: '1',
        text: 'hello world',
        user: { id: '1', username: 'Dan' },
    },
};

const loadingArgs = {
    comment: {
        id: '1',
        text: 'hello world',
        user: { id: '1', username: 'Dan' },
    },
    isLoading: true,
};

export const Normal = Template.bind({});
Normal.args = normalArgs;

export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = normalArgs;
NormalRedesigned.decorators = [NewDesignDecorator];

export const Loading = Template.bind({});
Loading.args = loadingArgs;

export const LoadingRedesigned = Template.bind({});
LoadingRedesigned.args = loadingArgs;
LoadingRedesigned.decorators = [NewDesignDecorator];
