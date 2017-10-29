import { createStore, combineReducers } from 'redux';

const allPosts = (state = [], action) => {
    var nuevoEstado = Object.assign({}, state);

    switch (action.type) {
        case 'DATA_LOADER':
            // modificación del nuevo estado
            return nuevoEstado;
        default:
            return state;
    }
}

const reducer = combineReducers({
    allPosts: allPosts
});

const store = createStore(reducer);