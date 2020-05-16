import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer, compose } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

import { rootReducer } from './reducer/root-reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelint: ['auth', 'user'],
    blacklist: []
}

const persistedreducer = persistReducer(persistConfig, rootReducer)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(persistedreducer, composeEnhancers(applyMiddleware(thunk)))
export const persistor = persistStore(store)