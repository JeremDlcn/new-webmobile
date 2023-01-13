import { Link } from 'react-router-dom';
import './Card.css';
import PlaneCanvas from '../Plane/PlaneCanvas';
import { Curtains } from 'react-curtains';
import { useEffect, useState } from 'react';

function Card(props) {

    const style = {
        backgroundImage: `url(${props.background})`,
    }
    const [styled, setStyle] = useState({ left: '0rem' });

    useEffect(() => {
      setTimeout(function () {
        setStyle({ left: '-8rem' });
      }, 100);
    }, []);

    

    return (
        <div className="card card-bg" style={style}>
            <Curtains pixelRatio={Math.min(1.5, window.devicePixelRatio)} style={styled}>
                <Link to={props.link} className="card-link">
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
                </Link>
            </Curtains>
        </div>

    );
};

export default Card;