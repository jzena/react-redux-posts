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
        this.initialFetch(this.props.pagination.page);
    }

    async initialFetch(page) {
        await this.props.dispatch1(page);
        this.setState({ loading: false });

    }

    componentWillUnmount() {
        this.props.clear();
    }

    async componentWillReceiveProps(next_props) {
        if (next_props.pagination.page != this.props.pagination.page) {
            this.setState({ loading: true });
            this.initialFetch(next_props.pagination.page);
            console.log(next_props.pagination.page);
            console.log(this.props.pagination.page);
        }
    }


    allPosts = () => {
        const Posts = this.props.allPosts.map((post) => {
            if ((this.props.login) && this.props.login.id == post.user_id) {
                return (
                    <Link to={`/${post.user_id}/post/${post.id}`} key={post.id}>
                        <h4>{post.title}</h4>
                    </Link>
                )
            }
            else {
                return (
                    <Link to={`/post/${post.id}`} key={post.id}>
                        <h4 key={post.id}>{post.title}</h4>
                    </Link>
                )
            }
        });
        return Posts;
    }

    render() {
        // if (this.state.loading) {
        //     return <h4>Loading...</h4>
        // }
        return (
            <div>
                <h2>Home desde el nuevo Componente</h2>
                <Pagination />
                {this.state.loading && <h4>Loading...</h4>}
                {!(this.state.loading) && this.allPosts()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        allPosts: state.allPosts,
        login: state.login,
        pagination: state.pagination
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch1: async (pagina) => {
            //dispatch(actionCreator)
            await axios.get(`https://blog-api-u.herokuapp.com/v1/posts?page=${pagina}`)
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