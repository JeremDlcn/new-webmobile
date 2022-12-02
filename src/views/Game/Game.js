import './Game.css';
import Header from '../../components/Header/Header';
import SmallCard from '../../components/SmallCard/SmallCard';
import { useParams } from 'react-router-dom';

const importAll = (r) => {
    return r.keys().map(r);
}
const images = importAll(require.context('../../../src/assets/years', true, /\.(png|jpe?g|svg)$/));
const img = images.filter((img) => {return img.includes("logo");}); //get logos

const Game = () => {
    let { id } = useParams();

    return (
        <div className="game">
            <Header />
            <SmallCard
                image={img[0]}
                title={'Tokyo'}
                year={id}
            />
        </div>
    )
}

export default Game;