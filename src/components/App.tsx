import React from 'react';
import {Route, Routes} from "react-router";
import Home from "../pages/Home";

const App = () => {
    return (
        <main>
            <Routes>
                <Route path={"/"} element={<Home/>}></Route>
            </Routes>
        </main>
    );
};

export default App;