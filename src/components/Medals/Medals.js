import './Medals.css';
import gold from '../../assets/medals/gold.svg';
import silver from '../../assets/medals/silver.svg';
import bronze from '../../assets/medals/bronze.svg';


function Medals(props) {

    return (
        <div className="medals">
            <div className="medals-item">
                <img src={gold} alt="gold medal" />
                <p className="medals-number">{props.gold}</p>
            </div>
            <div className="medals-item">
                <img src={silver} alt="silver medal" />
                <p className="medals-number">{props.silver}</p>
            </div>
            <div className="medals-item">
                <img src={bronze} alt="bronze medal" />
                <p className="medals-number">{props.bronze}</p>
            </div>
        </div>
    );
};

export default Medals;