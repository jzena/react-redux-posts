import React from 'react';
import ACrearForm from './ACrearForm';
import { connect } from 'react-redux';
import axios from 'axios';
import { reset } from 'redux-form';

const ACrear = (props) => {
    const manejoDeForma = (data) => {
        console.log(data);
        let jwt = props.login.jwt;
        let config = { 'Authorization': 'Bearer' + jwt }
        axios.post('http://blog-api-u.herokuapp.com/v1/posts', {
            post: {
                title: data.title,
                body: data.body
            }
        },
            {
                headers: config
            }
        )
            .then(function (response) {
                console.log(response);
                props.creado();                
            })
            .catch(function (error) {
                console.log(error);
                props.error();
            })
    }
    return (
        <div>
            <h2>
                Crear Post
            </h2>
            <h4>{props.mensaje}</h4>
            <ACrearForm onSubmit={manejoDeForma} />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        login: state.login,
        mensaje: state.creado
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        creado: () => {
            dispatch(reset('ACrearForm'));
            dispatch({ type: 'CREATED_' });
        },
        error: () => {
            dispatch({ type: 'ERROR_CREATED_' });
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ACrear)