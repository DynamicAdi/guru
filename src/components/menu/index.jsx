import React, { useEffect, useState } from "react";
import Navbar from "../../global/navbar";
import "./styles.scss";
import FilledCard from "./filledCard";
import { useArray } from "../../funcs/context";
import PosCard from "./pos-card";
import axios from "axios";
import DetailsCard from "../corporate/DetailsCard";
import Loader from "../../global/loader/loader";
import {Link} from 'react-router-dom'

function Menu({ backend }) {
  const { myArray } = useArray();
  const [active, setActive] = useState(false);
  const [catogery, setCatogery] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [menuItems, setMenuItems] = useState([]);
  const [FoodPrefrence, setFoodPrefrence] = useState('both');
  const [nextData, setnextData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMenuData = async () => {
    try {
      const { data } = await axios.get(`${backend}/catogery`);
      setCatogery(data);
    } catch (error) {
      console.error("Failed to fetch menu data", error);
    }
  };


  const fetchMenuItems = async () => {
    try {
      setLoading(true);
      let url = `${backend}/Foods`;
      if (selectedCategory) url += `/${selectedCategory}`;
      if (FoodPrefrence) url += `?isVeg=${FoodPrefrence}`;
      const { data } = await axios.get(url);
      setMenuItems(data);
      setLoading(false);
      if (FoodPrefrence !== "") {
        setMenuItems(filterMenuItems(data));
      setLoading(false);
      }
    } catch (error) {
      console.error("Failed to fetch menu items", error);
    }
  };

  useEffect(() => {
    fetchMenuData();
  }, []);

  const filterMenuItems = (items) => {
    if (FoodPrefrence === "veg") {
      return items.filter((item) => item.isVeg);
    }
    if (FoodPrefrence === "non-veg") {
      return items.filter((item) => !item.isVeg);
    }
    return items;
  };

  useEffect(() => {
    fetchMenuItems();
  }, [selectedCategory, FoodPrefrence]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const getMenu = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(`${backend}/plate`, myArray);
      setnextData(data);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="menuMain">
      <Navbar />
      <div className="up">
        <h1>{active ? "Your menu items" : "Our Delicious Menu"}</h1>
        {active ? (
          <></>
        ) : (
          <div className="tags">
            <div className="context">
              <p>Categories</p>
              <select className="tag" onChange={(e) => handleCategoryChange(e)}>
                <option value="">All Categories</option>
                {catogery.length > 0 &&
                  catogery &&
                  catogery.map((name, index) => (
                    <option key={index} value={name.name}>
                      {name.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="context">
              <p>Food preference</p>
              <select
                className="tag"
                defaultValue={"both"}
                onChange={(e) => setFoodPrefrence(e.target.value)}
              >
                <option value="">Both</option>
                <option value={"veg"}>Veg</option>
                <option value={"non-veg"}>Non-veg</option>
              </select>
            </div>
          </div>
        )}
      </div>

      <div className="screens">
        {active ? (
          <div className={`child`}>
            {loading ? (
              <Loader height={'60vh'} />
            ): (<>
            {nextData.length > 0 ? (
              nextData.map((item, index) => (
                <DetailsCard
                  key={index}
                  id={item._id}
                  title={item.name}
                  image={item.image}
                  desc={item.description}
                />
              ))
            ) : (
              <h2>No Food Found</h2>
            )}
              </>)}

          </div>
        ) : (
          <div className="child nextScreen">
            {loading ? (
              <Loader height={'60vh'} />
            ): (<>
            {menuItems.length > 0 ? (
              menuItems.map((item, index) => (
                <PosCard
                key={index}
                id={item._id}
                title={item.name}
                image={item.image}
                desc={item.description}
                veg={item.isVeg}
              />
              ))
            ) : (
              <h2>No Food Found</h2>
            )}
              </>)}
          </div>
        )}
      </div>

      <div className="down">
        <h1>{myArray.length} Items selected</h1>
        <div className="buttons">
          <button
            className={`${myArray.length > 0 ? "" : "disabled"} next ${
              active ? "back" : ""
            }`}
            {...myArray < 0 && { onClick: () => {setActive(!active), {...active ? "" : getMenu()}}}}
          >
            {active ? "Back" : "Next"}
          </button>
          {active && 
          <Link to="/checkout" state={{items: nextData, prefrence: FoodPrefrence}}>
          <button className="checkout">Checkout</button>
          </Link>
          }
        </div>
      </div>
    </div>
  );
}

export default Menu;
