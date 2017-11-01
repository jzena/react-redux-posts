import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class AMisPosts extends Component {
    render() {
        return (
            <div>
                <h2>Mis Posts</h2>
                <Link to={`/${this.props.login.id}/crear`}>Crear Posts</Link>
                <h2>Lista de Posts</h2>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        login: state.login
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch1: () => {
            //dispatch(actionCreator)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AMisPosts)