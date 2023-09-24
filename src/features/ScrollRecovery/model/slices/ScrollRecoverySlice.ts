import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollRecoverySchema } from '../types/ScrollRecoverySchema';

const initialState: ScrollRecoverySchema = {
    scroll: {},
};

export const ScrollRecoverySlice = createSlice({
    name: 'ScrollRecoverySlice',
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            { payload }: PayloadAction<{ path: string; position: number }>,
        ) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

export const { actions: scrollRecoveryActions } = ScrollRecoverySlice;
export const { reducer: scrollRecoveryReducer } = ScrollRecoverySlice;
