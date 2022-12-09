import Flag from '../Flag/Flag';
import Medals from '../Medals/Medals';
import './Fields.css';

const Pool = () => {
    return (
        <div className="gym">
            <h1>Natation</h1>
            <ul className="field pool-field">
                <li className="field-item">
                    <Flag country="France" />
                    <Medals
                        gold="1"
                        silver="0"
                        bronze="3"
                    />
                    <div className="position"><span className="position-text">1</span></div>
                </li>
                <li className="field-item">
                    <Flag country="Japon" />
                    <Medals
                        gold="2"
                        silver="1"
                        bronze="0"
                    />
                    <div className="position"><span className="position-text">2</span></div>
                </li>
                <li className="field-item">
                    <Flag country="Italie" />
                    <Medals
                        gold="1"
                        silver="2"
                        bronze="1"
                    />
                    <div className="position"><span className="position-text">3</span></div>
                </li>
            </ul>
        </div>
    );
}

export default Pool;
