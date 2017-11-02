import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Home from './Initial/Home';
import Login from './Initial/Login';
import Signup from './Initial/Signup';
import Post from './Initial/Post';
import AHeader from './Auth/AHeader';
import AMisPosts from './Auth/AMisPosts';
import ACrear from './Auth/ACrear';

import { connect } from 'react-redux';

const Header = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/signup'>Sign Up</Link>
            <Link to='/login'>Login</Link>
        </nav>
    )
}
const repo = `/${window.location.pathname.split('/')[1]}`;

const App = (props) => {
    console.log(props.login);
    if (props.login != null) {
        return (
            <Router>
                <div>
                    <AHeader />
                    <h2>auth</h2>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/post/:id" component={Post} />
                    <Route path="/:user/posts" component={AMisPosts} />
                    <Route path="/:user/crear" component={ACrear} />
                    <Route path="/:user/post/:id" component={Post} />
                </div>
            </Router>
        )
    } else {
        return (
            //<Router>
            <Router basename={repo}>            
                <div>
                    <Header />
                    <Route exact path="/" component={Home} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/login" component={Login} />
                    <Route exact path="/post/:id" component={Post} />
                    <h2>Dentro de App..</h2>
                </div>
            </Router>
        )
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
export default connect(mapStateToProps, mapDispatchToProps)(App)