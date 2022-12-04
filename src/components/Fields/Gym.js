import Flag from '../Flag/Flag';
import Medals from '../Medals/Medals';
import './Fields.css';

const Gym = () => {
    return (
        <div className="gym">
            <h1>Gymnastique</h1>
            <ul className="field gym-field">
                <li className="field-item">
                    <Flag country="France" />
                    <Medals
                        gold="1"
                        silver="0"
                        bronze="3"
                    />
                </li>
                <li className="field-item">
                    <Flag country="Japon" />
                    <Medals
                        gold="2"
                        silver="1"
                        bronze="0"
                    />
                </li>
                <li className="field-item">
                    <Flag country="Italie" />
                    <Medals
                        gold="1"
                        silver="2"
                        bronze="1"
                    />
                </li>
            </ul>
        </div>
    );
}

export default Gym;
