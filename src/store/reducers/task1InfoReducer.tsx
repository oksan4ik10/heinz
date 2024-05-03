import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { TNamesQuestion } from '../../models/type';
interface ICheckSection {
    info: boolean;
    skills: boolean;
    job: boolean;
    photo: boolean;
    education: boolean;
    experience: boolean;

}

const initialState: ICheckSection = { info: false, skills: false, education: false, experience: false, job: false, photo: false };

export const task1InfoReducer = createSlice({
    name: 'nameUser',
    initialState,
    reducers: {
        setChekSection(state, action: PayloadAction<TNamesQuestion>) {
            state[action.payload] = true;
        },
    },
});

export default task1InfoReducer.reducer;
export const { setChekSection } = task1InfoReducer.actions;