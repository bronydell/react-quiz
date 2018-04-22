import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import models from 'src/models'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = composeWithDevTools({})
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

const rootReducer = combineReducers(models.reducers)

const store = createStore(rootReducer, enhancer)

sagaMiddleware.run(models.sagas)

store.close = () => store.dispatch(END)

export default store
