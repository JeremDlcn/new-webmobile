import './SmallCard.css';


function SmallCard(props) {
    return (
        <div className="small">
                <div className="small-image">
                    <img src={props.image} alt={props.title} />
                </div>
                <div className="small-desc">
                    <h2 className="small-title">{props.title}</h2>
                    <p className="small-year">{props.year}</p>
                </div>
        </div>
    );
};

export default SmallCard;