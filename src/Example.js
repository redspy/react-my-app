import {render} from "@testing-library/react"
import React from "react"
import Test from './Test'
import Test0525 from './Test0525'
import Test0917 from './Test0917'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "초기값"
        }
    }
    changeText = () => {
        this.setState({text: "클릭!!"})
    }
    changeDay = () => {
        if (this.state.text == "초기값") {
            this.setState({text: "클릭!!"})
            return (<Test/>);
        } else {
            this.setState({text: "초기값"})
            return (<Test0525/>);
        }
    }

    viewArea() {
        if (this.state.text == "초기값") {
            return (<Test/>);
        } else {
            return (<Test0525/>);
        }
    }

    render() {
        return (

            <div>


{/* 
                <BrowserRouter>
                    <div
                        style={{
                            padding: 20,
                            border: '5px solid black'
                        }}>
                        <Link to="/">
                            <button>처음으로</button>
                        </Link><br/>
                        <Link to="0520">
                            <button>5월 20일</button>
                        </Link><br/>
                        <Link to="0525">
                            <button>5월 25일</button>
                        </Link><br/>
                        <Link to="0526">
                            <button>5월 26일</button>
                        </Link>
                    </div>
                    <div>
                        <Routes>
                            <Route exact="exact" path="0520" element={<Test></Test>}/>
                            <Route path="0525" element={<Test0525></Test0525>}/>
                            <Route
                                path="0526"
                                element={<div > <p>5월 26일 오늘의 일기</p>
                                <br></br>
                                <img
                                    src={require('./resource/0526/20220526_091047.jpg')}
                                    width="530"
                                    height="400"/>
                                <div>
                                    소을이일기 소을이패션쑈
                                </div>
                                <img
                                    src={require('./resource/0526/img_20220526162847601.jpg')}
                                    width="530"
                                    height="600"/>
                                <div>
                                    어린이집이 참 재밌어요
                                </div>
                                <img
                                    src={require('./resource/0526/20220522_182424.jpg')}
                                    width="530"
                                    height="400"/>
                                <div>
                                    미끄럼틀타고 슝
                                </div>
                            </div>}></Route>
                        </Routes>
                    </div>
                </BrowserRouter> */}

            </div>
        );
    }
}
