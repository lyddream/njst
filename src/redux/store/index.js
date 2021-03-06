import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers'
import middleware from '../middleware'

const configureStore =  () => {
    const initialState = {};
    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(...middleware)
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers');
            store.replaceReducer(nextReducer)
        })
    }

    return store
};

export  const store = configureStore();