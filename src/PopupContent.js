import React, {Component} from 'react';
 
class PopupContent extends Component {
    render(){
        return(


                <div className="dimmed_layer_wrapper" onClick={this.props.onClose}>
                    <div className="full_layer">
                        <div className="common_alert"> 
                            <img className="popupImageStyle" src={this.props.src} onClick={this.onClose} />
                        </div>
                    </div>
                    
                </div>


            
        );
    }
}
 
export default PopupContent;