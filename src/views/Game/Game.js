import * as react from 'react';
import './Game.css';
import Header from '../../components/Header/Header';
import { useParams } from 'react-router-dom';

//import all images from years folder
// const importAll = (r) => {
//     return r.keys().map(r);
// }
// const images = importAll(require.context('../../../src/assets/years', true, /\.(png|jpe?g|svg)$/));
// const img = images.filter((img) => {return img.includes("logo");}); //get logos

const Game = () => {
    let { id } = useParams();

    return (
        <div className="game">
            <Header />
            <div className="game__container">{id}</div>

        </div>
    )
}

export default Game;