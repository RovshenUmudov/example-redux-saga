import React from 'react';
import {getPosts} from "../../redux/reducers/postsReducer";
import {useDispatch} from "react-redux";
import { useTypedSelector } from '../../hooks/redux';

const Home = () => {
    const {posts} = useTypedSelector(state => state.posts)
    const dispatch = useDispatch()

    console.log(posts);

    return (
        <div>
            <button onClick={() => dispatch(getPosts())}>Load Posts</button>
            <br/>
            <br/>
            <span>result in console</span>
        </div>
    );
};

export default Home;