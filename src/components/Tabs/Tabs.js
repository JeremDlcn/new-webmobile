import './Tabs.css';


function Tabs(props) {
    return (
        <div className="tabs">
            <ul className="tabs-list">
                <li className="tabs-list-item"><p>Athlétisme</p></li>
                <li className="tabs-list-item"><p>Natation</p></li>
                <li className="tabs-list-item"><p>Gymnastique</p></li>
            </ul>
            <div className="tabs-content">
            </div>
        </div>
    );
};

export default Tabs;