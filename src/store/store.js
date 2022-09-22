import {
	compose,
	legacy_createStore as createStore,
	applyMiddleware,
} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import { rootSaga } from './root-saga'

import { rootReducer } from './root-reducer'

const persistConfig = {
	key: 'root',
	storage: storage,
	// blacklist: ['user'],
	whitelist: ['cart'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware()

const middlewares = [
	process.env.NODE_ENV !== 'production' && logger,
	sagaMiddleware,
	// thunk,
].filter(Boolean)

const composedEnhancer =
	(process.env.NODE_ENV !== 'production' &&
		window &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose

const composedEnhancers = composedEnhancer(applyMiddleware(...middlewares))

export const store = createStore(persistedReducer, undefined, composedEnhancers)

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)
