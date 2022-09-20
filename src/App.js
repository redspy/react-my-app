import './App.css';
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
import Home from './Home'
import Diary from './Diary'
import dailyData from "./DiaryDefine.js"
import OnePageTest from './OnePageTest';

function App() {
    var data = {
        dateRouteList: [
            '0525',
            '0526',
            '0917',
            '0919',
            '0920',
        ],
        titleList: [
            '5월 25일',
            '5월 26일',
            '9월 17일',
            '9월 19일',
            '9월 20일',
        ]
    }

    return (
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
                            {
                                
                                data.dateRouteList.map((routeString, index) =>{
                                    return (
                                        <Route path={routeString} element={<Diary title={dailyData[routeString].title} image={dailyData[routeString].imageData} description={dailyData[routeString].description}></Diary>}></Route>
                                    );
                                })
                            }
                            <Route path="0" element={<OnePageTest></OnePageTest>}></Route> 
                        </Routes>
                    </BrowserRouter>
                </div>
            </body>
        </div>
    );
}

export default App;
