import React from 'react';
import {getPosts} from "../../redux/reducers/postsReducer";
import {useDispatch, useSelector} from "react-redux";

const Home = () => {
    const posts = useSelector((state: any) => state.postsReducer.posts)
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