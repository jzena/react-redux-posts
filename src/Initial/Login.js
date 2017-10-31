import React from 'react';
import LoginFormaFinal from './LoginFormaFinal';
import axios from 'axios';
import { connect } from 'react-redux';

const Login = (props) => {

    const funcProps = () => {
        //console.log(props.own)
    }

    const funcionForma = (datos) => {
        console.log(datos);
        axios.post('https://blog-api-u.herokuapp.com/v1/login', {
            login: {
                email: datos.email,
                password: datos.password
            }
        })
            .then(function (response) {
                console.log(response);
                props.login(response.data);
                props.history.push('/');
            })
            .catch(function (error) {
                console.log(error);
                props.errorLogin();
            })
    }
    return (
        <div>
            {funcProps()}
            <h2>Login</h2>
            {props.mensaje.mensaje}
            <LoginFormaFinal onSubmit={funcionForma} />
        </div>
    );
};
const mapStateToProps = (state, ownProps) => {
    return {
        mensaje: state.userStatus,
        own: ownProps
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        login: (datos) => {
            dispatch({ type: 'LOGIN', data: datos })
        },
        errorLogin: () => {
            dispatch({ type: 'USER_ERROR' });
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)