import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { TNamesQuestion, TStateQuestion } from '../../models/type';

interface IUserAnswer {
    user: number[],
    stateAnswer: TStateQuestion
}
interface ICheckSection {
    info: IUserAnswer;
    skills: IUserAnswer;
    job: IUserAnswer;
    photo: IUserAnswer;
    education: IUserAnswer;
    experience: IUserAnswer;

}

const objInitialState: IUserAnswer = {
    user: [],
    stateAnswer: "wait"
}

const initialState: ICheckSection = { info: Object.assign({}, objInitialState), skills: Object.assign({}, objInitialState), education: Object.assign({}, objInitialState), experience: Object.assign({}, objInitialState), job: Object.assign({}, objInitialState), photo: Object.assign({}, objInitialState) };

interface ISetAnswerUser {
    section: TNamesQuestion,
    arr: number[],
    stateAnswer: TStateQuestion
}
interface ISetStateUser {
    section: TNamesQuestion,
    stateAnswer: TStateQuestion
}

export const task1UserAnswerReducer = createSlice({
    name: 'taskUserAnswer',
    initialState,
    reducers: {
        setAnswerUser(state, action: PayloadAction<ISetAnswerUser>) {
            state[action.payload.section].user = action.payload.arr;
            state[action.payload.section].stateAnswer = action.payload.stateAnswer;
        },
        setStateAnswer(state, action: PayloadAction<ISetStateUser>) {
            state[action.payload.section].stateAnswer = action.payload.stateAnswer;
        }
    },
});

export default task1UserAnswerReducer.reducer;
export const { setAnswerUser, setStateAnswer } = task1UserAnswerReducer.actions;