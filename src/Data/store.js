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
            nuevoEstado = { mensaje: "El uauario no se creó o los datos no son correctos" }
            return nuevoEstado;
        default:
            return {};
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

const pagination = (state = { total: 1, page: 1 }, action) => {
    var nuevoEstado = Object.assign({}, state);
    switch (action.type) {
        case 'SET_CURRENT':
            nuevoEstado.page = action.page;
            return nuevoEstado;
        case 'SET_TOTAL':
            nuevoEstado.total = action.total;
            return nuevoEstado;
        default:
            return state;
    }
}

const showPost = (state = {}, action) => {
    var nuevoEstado = Object.assign({}, state);
    switch (action.type) {
        case 'GET_POST':
            nuevoEstado = action.data;
            return nuevoEstado;
        case 'CLEAR_POST':
            nuevoEstado = {};
            return nuevoEstado;
        default:
            return state;
    }
}

const errorPost = (state = null, action) => {
    var nuevoEstado = Object.assign({}, state);
    switch (action.type) {
        case 'ERROR_GET_POST':
            nuevoEstado = "Error al cargar el post";
            return nuevoEstado;
        default:
            return null;
    }
}

const reducer = combineReducers({
    allPosts: allPosts,
    userStatus: userCreated,
    pagination: pagination,
    login: session,
    showPost: showPost,
    errorPost: errorPost,
    form: formReducer
});

const store = createStore(reducer);

export default store;