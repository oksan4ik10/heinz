import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { TNamesQuestion, ICheckSection } from '../../models/type';

const initialState: ICheckSection = { info: false, skills: false, education: false, experience: false, job: false, photo: false };

export const tasksInfoReducer = createSlice({
    name: 'taskInfo',
    initialState,
    reducers: {
        setChekSection(state, action: PayloadAction<TNamesQuestion>) {
            state[action.payload] = true;
        },
        resetCheckSection(state) {
            for (const key in state) {
                state[key as TNamesQuestion] = false
            }
        },
    }
});

export default tasksInfoReducer.reducer;
export const { setChekSection, resetCheckSection } = tasksInfoReducer.actions;