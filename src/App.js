import './App.css';
import Example from './Example';
import 'react-pro-sidebar/dist/css/styles.css'
import {
    FaTachometerAlt,
    FaGem,
    FaList,
    FaGithub,
    FaRegLaughWink,
    FaHeart
} from "react-icons/fa";
function App() {
    return (
        // <div className="top-div">   <div className="App-left">     <ProSidebar> <Menu
        // iconShape="square">         <MenuItem icon={<FaGem />} >Dashboard</MenuItem>
        // <SubMenu title="Components" icon={<FaHeart />}> <MenuItem>Component
        // 1</MenuItem>             <MenuItem>Component 2</MenuItem> </SubMenu>
        // </Menu>     </ProSidebar>   </div> <div className="App"> <header
        // className="App-header">     <Example></Example>   </header> </div> </div>
        <div id="container">
{/* 
            <div id="leftThing">
                <ProSidebar>
                    <Menu iconShape="square">
                        <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
                        <SubMenu title="Components" icon={<FaHeart />}>
                            <MenuItem>Component 1</MenuItem>
                            <MenuItem>Component 2</MenuItem>
                        </SubMenu>
                    </Menu>
                </ProSidebar>
            </div> */}

            <div id="content">
                <div className="App">
                    <header >
                        <Example></Example>
                    </header>
                </div>
            </div>

            {/* <div id="rightThing">
                Right Side Menu
            </div> */}

        </div>
    );
}

export default App;
