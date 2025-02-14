import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { SlicesName } from '../models/enums/slicesName';

import storageReducer from 'redux-persist/lib/storage/session';
import userSliceReducer from './slice/user';
const persistConfig = {
    key: 'root',
    type: storageReducer,
    storage: storageReducer,
    whitelist: [
        SlicesName.USER,
    ],
};

const rootReducer = combineReducers({
    [SlicesName.USER]: userSliceReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'],
            },
        }),
});

const persistedStore = persistStore(store);
export const useAppSelector: TypedUseSelectorHook<
    ReturnType<typeof store.getState>
> = useSelector;
export { store, persistedStore };