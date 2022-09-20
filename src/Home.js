import React from "react";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

export default class Home extends React.Component {
    render() {
        var routelist = Object.keys(this.props.data);

        return (
            <div class="homeBackground">
                <p>어떤날로 가볼까?</p>
                <div class="dateBound">
                    {
                        routelist.map((routeString, index) => {
                            return (
                                <Link to={routeString}>
                                    <button class="dateSelectButton">{this.props.data[routeString].title}</button>
                                </Link>
                            )
                        })
                    }

                    </div>
            </div>
        );
    }
}