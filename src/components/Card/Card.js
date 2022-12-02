import * as react from 'react';
import { Link } from 'react-router-dom';
import './Card.css';


function Header(props) {
    //props.backgrouns is the path to the background image
    const style = {
        backgroundImage: `url(${props.background})`,
    }

    return (
        <div className="card card-bg" style={style}>
            <Link to={props.link} className="card-link">
                <div className="card-year">
                    <p>{props.year}</p>
                </div>
                <div className="card-image">
                    <img src={props.image} alt={props.title} />
                </div>
                <div className="card-content">
                    <h2 className="card-title">{props.title}</h2>
                </div>
            </Link>
        </div>
    );
};

export default Header;