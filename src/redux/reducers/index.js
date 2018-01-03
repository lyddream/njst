import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';



export type State = {
    // Custom reducers

    // Third party reducers
    form: Object,
    routing: Object
};

export default combineReducers({
    form: formReducer,
    routing: routerReducer
});