import React from "react";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
export default class Home extends React.Component {
    render() {
        return (
            <div class="homeBackground">
                <p>어떤날로 가볼까?</p>
                <div class="dateBound">
                        <Link to="0525">
                            <button class="dateSelectButton">5월 25일</button>
                        </Link>
                        <Link to="0917">
                            <button class="dateSelectButton">9월 17일</button>
                        </Link>                     
                        <Link to="0919">
                            <button class="dateSelectButton">9월 19일</button>
                        </Link>
                    </div>
            </div>
        );
    }
}