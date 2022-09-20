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
            '0917',
            '0919',
            '0920',
        ],
        titleList: [
            '5월 25일',
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
                                        <Route path={routeString} element={<Diary title={data.titleList[index]} image={dailyData._0920.imageData} description={dailyData._0920.description}></Diary>}></Route>
                                    );
                                })
                            }
                            
{/*                             <Route path={data.dateRouteList[0]} element={<Test0525></Test0525>}></Route>
                            <Route path="0917" element={<Test0917></Test0917>}></Route>
                            <Route path="0919" element={<Test0919></Test0919>}></Route>
                            <Route path="0920" element={<Test0920 title="9월20일!!"></Test0920>}></Route>
*/}                            
                            <Route path="0" element={<OnePageTest></OnePageTest>}></Route> 
                        </Routes>
                    </BrowserRouter>
                </div>
            </body>
        </div>
    );
}

export default App;
