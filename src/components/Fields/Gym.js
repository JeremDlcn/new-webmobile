import Flag from '../Flag/Flag';
import Medals from '../Medals/Medals';
import './Fields.css';

const Gym = (props) => {
    return (
        <div className="gym">
            <h1>Gymnastique</h1>
            <ul className="field gym-field">
                <li className="field-item">
                    <div className="position"><span className="position-text">1</span></div>
                    <Flag country={props.data[0].country} />
                    <Medals
                        gold={props.data[0].gold}
                        silver={props.data[0].silver}
                        bronze={props.data[0].bronze}
                    />
                </li>
                <li className="field-item">
                    <div className="position"><span className="position-text">2</span></div>
                    <Flag country={props.data[1].country} />
                    <Medals
                        gold={props.data[1].gold}
                        silver={props.data[1].silver}
                        bronze={props.data[1].bronze}
                    />
                </li>
                <li className="field-item">
                    <div className="position"><span className="position-text">3</span></div>
                    <Flag country={props.data[2].country} />
                    <Medals
                        gold={props.data[2].gold}
                        silver={props.data[2].silver}
                        bronze={props.data[2].bronze}
                    />
                </li>
            </ul>
        </div>
    );
}

export default Gym;
