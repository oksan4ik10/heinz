import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ICheckSection {
    isScroll: boolean;

}

const initialState: ICheckSection = { isScroll: true };

export const screenPersonaReducer = createSlice({
    name: 'isScroll',
    initialState,
    reducers: {
        setIsScroll(state, action: PayloadAction<boolean>) {
            state.isScroll = action.payload;
        },
    },
});

export default screenPersonaReducer.reducer;
export const { setIsScroll } = screenPersonaReducer.actions;