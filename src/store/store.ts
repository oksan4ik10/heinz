import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import task1InfoReducer from './reducers/tasksInfoReducer';
import personaReducer from './reducers/personaReducer';
import task1UserAnswerReducer from './reducers/tasksUserAnswerReducer';
import screenPersonaReducser from './reducers/screenPersonaReducser';
import scrollReducer from './reducers/scrollReducer';

const rootReducer = combineReducers({
    task1InfoReducer,
    personaReducer,
    task1UserAnswerReducer,
    screenPersonaReducser,
    scrollReducer

});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;