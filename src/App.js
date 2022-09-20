import './App.css';
import Example from './Example';
import 'react-pro-sidebar/dist/css/styles.css'
import {
    FaHome,
    FaTachometerAlt,
    FaGem,
    FaList,
    FaGithub,
    FaRegLaughWink,
    FaHeart
} from "react-icons/fa";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Test from './Test'
import Home from './Home'
import Test0525 from './Test0525'
import Test0917 from './Test0917'
import Test0919 from './Test0919'
import Test0920 from './Test0920'
import OnePageTest from './OnePageTest';

function getTitle() {
    return this.Test0917.getTitle();
}
function App() {
    return (
        <div id="container">
            <div id="content">

                <div className="App">

                    <div class="myHeader">
                   
                        <div class="titleText">
                            <p>소을이의 일기</p>
                        </div>   
                         
                            <div style={{
                                width:80,
                                position: 'relative',
                            }}>
                                <a href="/"> 
                                <FaHome style={{
                                    width: 30,
                                    height: 30,
                                    padding: 15,
                                    paddingLeft: 30,
                                    color: 'white',
                                }} />
                                </a> 
                            </div>
                                   

                    </div>

                    <body>
                        <div>
                            <BrowserRouter>
                                <Routes>
                                    <Route path="/" element={<Home></Home>}></Route>
                                    <Route path="0525" element={<Test0525></Test0525>}></Route>
                                    <Route path="0917" element={<Test0917></Test0917>}></Route>
                                    <Route path="0919" element={<Test0919></Test0919>}></Route>
                                    <Route path="0920" element={<Test0920 title="9월20일!!"></Test0920>}></Route>
                                    <Route path="0" element={<OnePageTest></OnePageTest>}></Route>
                                </Routes>
                            </BrowserRouter>
                            <Example></Example>
                        </div>
                    </body>
                </div>
            </div>
        </div>
    );
}

export default App;
