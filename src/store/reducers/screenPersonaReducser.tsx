import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ICheckSection {
    isScreen: boolean;

}

const initialState: ICheckSection = { isScreen: false };

export const screenPersonaReducer = createSlice({
    name: 'isScreenPersona',
    initialState,
    reducers: {
        setIsScreen(state, action: PayloadAction<boolean>) {
            state.isScreen = action.payload;
        },
    },
});

export default screenPersonaReducer.reducer;
export const { setIsScreen } = screenPersonaReducer.actions;