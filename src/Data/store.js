import { createStore, combineReducers } from 'redux';

const allPosts = (state = [
    {
        id: 1,
        title: "Titulo del post en store",
        body: "Cuerpo del post"
    },
    {
        id: 2,
        title: "Titulo del segundo post en store",
        body: "Cuerpo del post"
    }], action) => {
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

export default store;