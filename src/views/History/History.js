import * as react from 'react';
import './History.css';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import logo from "../../../src/assets/jo-icons/tokyo.png"

const events = [
    {
        year: "2020",
        image: logo,
        title: "Tokyo",
        link: "/history/2020"
    },
    {
        year: "2024",
        image: logo,
        title: "Paris",
        link: "/history/2024"
    },
    
];
const Events =  events.map((event) => {
    return (
        <Card
        year={event.year}
        image={event.image}
        title={event.title}
        link={event.link}
     />
    )
})


const History = () => {

    return (
        <div className="history">
            <Header />
            <ul class="history-list">
                {Events}
            </ul>
        </div>
    )
}

export default History;