import React from 'react';
import {getPosts} from "../../redux/reducers/postsReducer";
import {useDispatch} from "react-redux";
import { useTypedSelector } from '../../hooks/redux';

const Home = () => {
    const {posts} = useTypedSelector(state => state.posts)
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => dispatch(getPosts())}>Load Posts</button>
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