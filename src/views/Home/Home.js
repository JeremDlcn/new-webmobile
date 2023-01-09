import './Home.css';
import Header from '../../components/Header/Header';
import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        document.querySelector('body').classList.add('enter');
    });

    return (
        <div className="home">
            <Header />
            <div className="home-body">
                <h1 className="home-title">Jeux Olympiques</h1>
                <div className="home-background"></div>
                <div className="home-panel home-panel-gray"></div>
                <div className="home-panel home-panel-white"></div>
            </div>

        </div>
    )
}


export default Home;