import Flag from '../Flag/Flag';
import Medals from '../Medals/Medals';
import './Fields.css';

const Pool = (props) => {
    return (
        <div className="pool">
            <h1>Natation</h1>
            <ul className="field pool-field">
                <li className="field-item">
                    <Flag country={props.data[0].country} />
                    <Medals
                        gold={props.data[0].gold}
                        silver={props.data[0].silver}
                        bronze={props.data[0].bronze}
                    />
                    <div className="position"><span className="position-text">1</span></div>
                </li>
                <li className="field-item">
                    <Flag country={props.data[1].country} />
                    <Medals
                        gold={props.data[1].gold}
                        silver={props.data[1].silver}
                        bronze={props.data[1].bronze}
                    />
                    <div className="position"><span className="position-text">2</span></div>
                </li>
                <li className="field-item">
                    <Flag country={props.data[2].country} />
                    <Medals
                        gold={props.data[2].gold}
                        silver={props.data[2].silver}
                        bronze={props.data[2].bronze}
                    />
                    <div className="position"><span className="position-text">3</span></div>
                </li>
            </ul>
        </div>
    );
}

export default Pool;
