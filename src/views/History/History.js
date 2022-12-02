import * as react from 'react';
import './History.css';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import logo from "../../../src/assets/years/2024/tokyo.png";

//import all images from years folder
const importAll = (r) => {
    return r.keys().map(r);
}

console.log(importAll(require.context('../../../src/assets/years', true, /\.(png|jpe?g|svg)$/)));

const events = [
    {
        year: "2012",
        image: logo,
        title: "Londres",
        link: "/history/2012"
    },
    {
        year: "2016",
        image: logo,
        title: "Rio",
        link: "/history/2016"
    },
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
        key={event.year.toString()}
     />
    )
})


const History = () => {

    return (
        <div className="history">
            <Header />
            <ul className="history-list">
                {Events}
            </ul>
        </div>
    )
}

export default History;