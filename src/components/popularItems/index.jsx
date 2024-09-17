import React, { useEffect, useState } from "react";
// import styles from './styles.module.scss'
import axios from 'axios';
import "./styles.scss";
import ColorCard from "./card";
import Loader from "../../global/loader/loader";

function PopularItems() {
  const backend = 'http://localhost:8080';
  const [currentCard, setCurrentCard] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Example breakpoint
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleFetch = async function () {
    setLoading(true);
    const response = await axios.get(`${backend}/popular`);
    setData(response.data);
    console.log(data);
    
    setLoading(false);
  };

  useEffect(() => {
    handleFetch();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % cards.length);
    }, 2000); // 2 seconds interval

    return () => clearInterval(interval);
  }, [isMobile]);


  return (
    <div className="popularItems">
      <div className={"upper"}>
        <h2>
          Popular <span>Items</span>
        </h2>
        <p>
          our popular food items accross india
        </p>
      </div>
      <div className="child">
        <div className="popCards"
         style={{transform: `translateX(-${currentCard * 80}%)`}}
        >
          {loading ? (<Loader />) : (
            data && 
            data.
            slice(0, 5).map((card, index) => (
              <ColorCard currentCard={currentCard} index={index} key={index} id={card._id} image={card.image} name={card.name} desc={card.description} isVeg={card.isVeg} />
            ) 
          ))}

        </div>
      </div>
    </div>
  );
}

export default PopularItems;
