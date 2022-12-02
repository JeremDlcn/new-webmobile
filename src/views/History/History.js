import * as react from 'react';
import './History.css';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';

//import all images from years folder
const importAll = (r) => {
    return r.keys().map(r);
}
const images = importAll(require.context('../../../src/assets/years', true, /\.(png|jpe?g|svg)$/));


const events = [
    {
        year: "2012",
        title: "Londres",
        link: "/history/2012"
    },
    {
        year: "2016",
        title: "Rio",
        link: "/history/2016"
    },
    {
        year: "2020",
        title: "Tokyo",
        link: "/history/2020"
    },
    {
        year: "2024",
        title: "Paris",
        link: "/history/2024"
    },
    
];
const img = images.filter((img) => {return img.includes("logo");}); //get logos

const Events =  events.map((event) => {
    return (
        <Card
        year={event.year}
        image={img[events.indexOf(event)]}              
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