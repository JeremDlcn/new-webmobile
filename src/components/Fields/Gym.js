import Medals from '../Medals/Medals';
import './Fields.css';

const Gym = () => {
    return (
        <div className="gym">
            <h1>Gymnastique</h1>
            <div className="gym-field">
                <Medals 
                gold="1"
                silver="0"
                bronze="3"
                />
            </div>
        </div>
    );
}

export default Gym;
