import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ICheckSection {
    user: number;

}

const initialState: ICheckSection = { user: 0 };

export const personaReducer = createSlice({
    name: 'persona',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<number>) {
            state.user = action.payload;
        },
    },
});

export default personaReducer.reducer;
export const { setUser } = personaReducer.actions;