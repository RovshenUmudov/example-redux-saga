import React from 'react';
import {fetchPosts} from "../../redux/reducers/postsReducer";
import {useDispatch} from "react-redux";
import {useTypedSelector} from '../../hooks/redux';

const Home = () => {
    const {posts, loading, error} = useTypedSelector(state => state.posts)
    const dispatch = useDispatch()

    if (loading) {
        return <h2>Loading...</h2>
    }

    if (error) {
        return <h2>{error}</h2>
    }

    return (
        <div>
            <button onClick={() => dispatch(fetchPosts())}>Load Posts</button>
            <br/>
            <br/>
            {
                posts.map(el => (
                    <div key={el.id}>
                        <h2>{el.title}</h2>
                        <p>{el.body}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default Home;