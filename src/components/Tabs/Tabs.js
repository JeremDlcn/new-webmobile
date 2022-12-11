import './Tabs.css';
import { useState } from 'react';
import Gym from '../Fields/Gym';
import Athletic from '../Fields/Athletic';
import Pool from '../Fields/Pool';



function Tabs(props) {
    const [activeTab, setActiveTab] = useState("tab1");

    const handleTab1 = () => {
        setActiveTab('tab1');
    };
    
    const handleTab2 = () => {
        setActiveTab('tab2');
    };
    
    const handleTab3 = () => {
        setActiveTab('tab3');
    };

    return (
        <div className="tabs">
            <ul className="tabs-list">
                <li className={activeTab === "tab1" ? "tabs-list-item active" : "tabs-list-item"} onClick={handleTab1}><p>Athlétisme</p></li>
                <li className={activeTab === "tab2" ? "tabs-list-item active" : "tabs-list-item"} onClick={handleTab2}><p>Natation</p></li>
                <li className={activeTab === "tab3" ? "tabs-list-item active" : "tabs-list-item"} onClick={handleTab3}><p>Gymnastique</p></li>
            </ul>
            <div className="tabs-content">
                {activeTab === "tab1" && <Athletic data={props.data.athletics} />}
                {activeTab === "tab2" && <Pool data={props.data.swimming}/>}
                {activeTab === "tab3" && <Gym data={props.data.gym}/>}
            </div>
        </div>
    );
};

export default Tabs;