import React from "react";
import PopupDom from './PopupDom';
import PopupContent from './PopupContent';

export default class Diary extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            isOpenPopup: false,
            popURL: '',
        }
 
        this.openPopup = this.openPopup.bind(this);
        this.closePopup = this.closePopup.bind(this);
    }
 
    openPopup(path){
        this.setState({
            isOpenPopup: true,
            popURL: path,
        })
    }

    clickHandler = (params, e) => {
        console.log(params); // error
        e.preventDefault();
        // do someting...
        this.setState({
            isOpenPopup: true,
            
        })
      }
      
 
    closePopup(){
        this.setState({
            isOpenPopup: false,
        })
    }

    render() {
        return (
            <div>
                <div class="titleStyle">{this.props.title}</div>
                <div>
                    {

                        this.props.image.map((path, index) => {
                            return (
                                <div className="contentBorder">
                                    <div id="popupDom">
                                        <img className="imageStyle" src={path} onClick={() => this.openPopup(path)}/>
                                        {
                                            this.state.isOpenPopup &&
                                            <PopupDom>
                                                <PopupContent onClose={this.closePopup} src={this.state.popURL}/>
                                            </PopupDom>
                                        } 
                                        
                                    </div>
                                    <div className="contentStyle">
                                        {this.props.description[index]}
                                    </div>
                                </div>      
                            );                      
                        })
                    }
                </div>             
            </div>
        );
    }
}
