import './History.css';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import events from '../../Data';
import { useRef, useEffect } from 'react';

//import all images from years folder
const importAll = (r) => {
    return r.keys().map(r);
}
const images = importAll(require.context('../../../src/assets/years', true, /\.(png|jpe?g|svg)$/));



const img = images.filter((img) => { return img.includes("logo"); }); //get logos
const bgs = images.filter((img) => { return img.includes("background"); }); //get backgrounds

const Events = events.map((event) => {
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
  const scrollRef = useRef();
  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      const onWheel = e => {
        if (e.deltaY == 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft*2 + e.deltaY,
          behavior: "smooth"
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
    return (
        <div className="history">
            <Header />
            <ul className="history-list" ref={scrollRef}>
                {Events}
            </ul>
        </div>
    )
}

export default History;