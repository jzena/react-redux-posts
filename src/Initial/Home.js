import React from 'react';
import { connect } from 'react-redux'


const Home = (props) => {
    const Posts = props.allPosts.map((post) => {
        return (
            <h4 key={post.id}>{post.title}</h4>
        )
    })
    return (
        <div>
            <h2>Home</h2>
            {Posts}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        allPosts: state.allPosts
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch1: () => {
            //dispatch(actionCreator)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);