import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const allPosts = (state = [], action) => {
    var nuevoEstado = Object.assign({}, state);

    switch (action.type) {
        case 'DATA_LOADED':
            // modificación del nuevo estado
            nuevoEstado = state.concat(action.data);
            return nuevoEstado;
        case 'CLEAR_DATA':
            nuevoEstado = [];
            return nuevoEstado;
        default:
            return state;
    }
}

const userCreated = (state = {}, action) => {
    var nuevoEstado = Object.assign({}, state);
    switch (action.type) {
        case 'USER_CREATED':
            nuevoEstado = { mensaje: "El uauario se creó con exito" }
            return nuevoEstado;
        case 'USER_ERROR':
            nuevoEstado = { mensaje: "El uauario no se creó" }
            return nuevoEstado;
        default:
            return state;
    }
}

const session = (state = null, action) => {
    var nuevoEstado = Object.assign({}, state);
    switch (action.type) {
        case 'LOGIN':
            nuevoEstado = action.data;
            return nuevoEstado;
        case 'LOGOUT':
            nuevoEstado = null;
            return nuevoEstado;
        default:
            return state;
    }
}

const reducer = combineReducers({
    allPosts: allPosts,
    userStatus: userCreated,
    form: formReducer
});

const store = createStore(reducer);

export default store;