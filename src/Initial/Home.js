import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Pagination from '../Pagination';

import { Link } from 'react-router-dom';

//// Componente sin estado
// const Home = (props) => {
//     const Posts = props.allPosts.map((post) => {
//         return (
//             <h4 key={post.id}>{post.title}</h4>
//         )
//     })
//     return (
//         <div>
//             <h2>Home</h2>
//             {Posts}
//         </div>
//     );
// };

//// Componente derivado de una clase
class Home extends Component {
    constructor() {
        super()
        this.state = {
            loading: true
        }
    }
    async componentDidMount() {
        this.initialFetch();
    }

    async initialFetch() {
        await this.props.dispatch1();
        this.setState({ loading: false });

    }

    componentWillUnmount() {
        this.props.clear();
    }

    allPosts = () => {
        const Posts = this.props.allPosts.map((post) => {
            return (
                <Link to={`/post/${post.id}`} key={post.id}>
                    <h4 key={post.id}>{post.title}</h4>
                </Link>
            )
        });
        return Posts;
    }

    render() {
        if (this.state.loading) {
            return <h4>Loading...</h4>
        }
        return (
            <div>
                <h2>Home desde el nuevo Componente</h2>
                <Pagination />
                {this.allPosts()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        allPosts: state.allPosts
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch1: async () => {
            //dispatch(actionCreator)
            await axios.get('https://blog-api-u.herokuapp.com/v1/posts')
                .then(function (response) {
                    console.log(response);
                    dispatch({
                        type: 'DATA_LOADED',
                        data: response.data
                    });
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        clear: () => {
            dispatch({ type: 'CLEAR_DATA' });
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);