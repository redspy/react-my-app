import { render } from "@testing-library/react"
import React from "react"
import Test from './Test'
import Test0525 from './Test0525'
import { BrowserRouter,
    Routes,
    Route,
    Link } from 'react-router-dom';

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "초기값"
        }
    }    
    changeText = ()=> {
        this.setState({
            text: "클릭!!"
        })
    }
    changeDay = () => {
        if(this.state.text == "초기값")
        {
            this.setState({
                text: "클릭!!"
            })
            return (<Test/>);            
        }
        else
        {
            this.setState({
                text: "초기값"
            })
            return (<Test0525/>);
        }
    }

    viewArea() {
        if(this.state.text == "초기값")
        {
            return (<Test/>);            
        }
        else
        {
            return (<Test0525/>);
        }
    }

    render() {
        return (
            <div>
                <p>{this.state.text}</p>
                {/* <p>
                    <button onClick={this.changeText}>버튼</button>
                    
                </p>
                <p>
                    <button onClick={this.changeDay}>날짜바꾸기</button>
                </p> */}
                {/* <Test0525 /> */}
                <BrowserRouter> 
                    <div style={{padding:20, border:'5px solid gray'}}>
                        <Link to="/">홈</Link><br />
                        <Link to="0520">
                            <button>5월 20일</button>
                        </Link><br/>
                        <Link to="0525">
                            <button>5월 25일</button>
                        </Link><br/>
                        {/* <Link to="/rooms">방 소개</Link><br/> */}
                        <Routes>     
                            <Route exact path="0520" element={<Test></Test>}/>
                            <Route path="0525" element={<Test0525></Test0525>}/>
                            {/* <Route path="/rooms" component={Rooms}/> */}    
                        </Routes>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
