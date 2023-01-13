import { Link } from 'react-router-dom';
import './Card.css';
import PlaneCanvas from '../Plane/PlaneCanvas';
import { Curtains } from 'react-curtains';
import { useState } from 'react';
import MediaQuery from 'react-responsive';

function Card(props) {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const boxStyle = {
        backgroundImage: `url(${props.background})`,
        transform: isHover ? 'skew(-16deg) scale(1.05)' : 'skew(-16deg) scale(1)',
    };

    return (
        <div className="card card-bg" style={boxStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link to={props.link} className="card-link">
                <MediaQuery maxWidth={768}>
                    <div className="card-year">
                        <p>{props.year}</p>
                    </div>
                    <div className="card-image">
                        <img src={props.image} alt={props.title} />
                    </div>
                    <div className="card-content">
                        <h2 className="card-title">{props.title}</h2>
                    </div>
                </MediaQuery>
                <MediaQuery minWidth={768}>
                    <Curtains pixelRatio={Math.min(1.5, window.devicePixelRatio)}>
                        <div className="card-year">
                            <p>{props.year}</p>
                        </div>
                        <div className="card-image">
                            <PlaneCanvas>
                                <img src={props.image} alt={props.title} />
                            </PlaneCanvas>
                        </div>
                        <div className="card-content">
                            <h2 className="card-title">{props.title}</h2>
                        </div>
                    </Curtains>
                </MediaQuery>
            </Link>
        </div>

    );
};

export default Card;