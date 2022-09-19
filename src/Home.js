import React from "react";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
export default class Home extends React.Component {
    render() {
        return (
            <div>
                <p>어떤날로 가볼까?</p>
                <div
                        style={{
                            padding: 20,
                            border: '5px solid black'
                        }}>
                        <Link to="0525">
                            <button>5월 25일</button>
                        </Link><br/><br/>
                        <Link to="0917">
                            <button>9월 17일</button>
                        </Link><br/><br/>                        
                        <Link to="0919">
                            <button>9월 19일</button>
                        </Link><br/><br/>
                    </div>
            </div>
        );
    }
}