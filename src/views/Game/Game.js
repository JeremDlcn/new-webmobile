import './Game.css';
import Header from '../../components/Header/Header';
import SmallCard from '../../components/SmallCard/SmallCard';
import { useParams } from 'react-router-dom';
import Tabs from '../../components/Tabs/Tabs';
import data from '../../Data'

const importAll = (r) => {
    return r.keys().map(r);
}
const images = importAll(require.context('../../../src/assets/years', true, /\.(png|jpe?g|svg)$/));

const Game = () => {
    let { id } = useParams();
    const img = images.filter((img) => { return img.includes(`logo-${id}`); });
    const dataGame = data.filter((game) => { return game.year === id; })[0];

    return (
        <div className="game">
            <Header />
            <div className="game-head">
                <SmallCard
                    image={img}
                    title={dataGame.title}
                    year={id}
                />
                <Tabs data={dataGame.game} />
            </div>
        </div>
    )
}

export default Game;