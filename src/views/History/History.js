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
        year: "1988",
        title: "Séoul",
        link: "/game/1988"
    },
    {
        year: "1992",
        title: "Barcelone",
        link: "/game/1992"
    },
    {
        year: "1996",
        title: "Atlanta",
        link: "/game/1996"
    },
    {
        year: "2000",
        title: "Sydney",
        link: "/game/2000"
    },
    {
        year: "2004",
        title: "Athènes",
        link: "/game/2004"
    },
    {
        year: "2008",
        title: "Bejing",
        link: "/game/2008"
    },
    {
        year: "2012",
        title: "Londres",
        link: "/game/2012"
    },
    {
        year: "2016",
        title: "Rio",
        link: "/game/2016"
    },
    {
        year: "2020",
        title: "Tokyo",
        link: "/game/2020"
    },
    {
        year: "2024",
        title: "Paris",
        link: "/game/2024"
    },
    
];
const img = images.filter((img) => {return img.includes("logo");}); //get logos
const bgs = images.filter((img) => {return img.includes("background");}); //get backgrounds

const Events =  events.map((event) => {
    return (
        <Card
        year={event.year}
        image={img[events.indexOf(event)]}              
        title={event.title}
        link={event.link}
        background={bgs[events.indexOf(event)]}
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