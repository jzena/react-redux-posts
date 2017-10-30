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
const repoAll = `/${window.location.pathname}`;
console.log(repo);
console.log(repoAll);
const App = () => {
    return (
        <Router basename={repo}>
            <div>
                <Header />
                <Route exact path="/" component={Home} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <h2>Dentro de App..</h2>
            </div>
        </Router>
    )
}

export default App;
