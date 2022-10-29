import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from "./rootReducer";

const persistConfig = {
    key: "root",
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: false
    })
});

export const persistor = persistStore(store);

// Using Redux Toolkit + Reducer----------------------------------------------

// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './rootReducer';

// const store = configureStore({reducer: rootReducer});

// export default store;

// Using vanilla redux--------------------------------------------------------

// import { createStore } from 'redux';
// import rootReducer from './rootReducer';

// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ 
//     && window.__REDUX_DEVTOOLS_EXTENSION__());

// export default store;

// ---------------------------------------------------------------------------