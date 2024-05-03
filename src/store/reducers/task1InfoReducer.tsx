import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { TNamesQuestion, ICheckSection } from '../../models/type';

const initialState: ICheckSection = { info: false, skills: false, education: false, experience: false, job: false, photo: false };

export const task1InfoReducer = createSlice({
    name: 'taskInfo',
    initialState,
    reducers: {
        setChekSection(state, action: PayloadAction<TNamesQuestion>) {
            state[action.payload] = true;
        },
    },
});

export default task1InfoReducer.reducer;
export const { setChekSection } = task1InfoReducer.actions;