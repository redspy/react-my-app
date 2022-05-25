import { render } from "@testing-library/react"
import React from "react"
import Test from './Test'
import Test0525 from './Test0525'

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
                <p>
                    <button onClick={this.changeText}>버튼</button>
                </p>
                <p>
                    <button onClick={this.changeDay}>날짜바꾸기</button>
                </p>
                <viewArea />
            </div>
        );
    }

}