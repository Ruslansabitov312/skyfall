import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';

export const getScrollRecoveryScroll = (state: StateSchema) =>
    state.scrollRecovery.scroll;

export const getScrollRecoveryByPath = createSelector(
    getScrollRecoveryScroll,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
