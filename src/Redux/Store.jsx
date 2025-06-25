
import { configureStore } from '@reduxjs/toolkit';
import { Reducers } from './reducers/Reducers';

export const store = configureStore({
    reducer: Reducers
})