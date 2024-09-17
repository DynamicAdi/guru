import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./items.scss";
import DetailsCard from "../corporate/DetailsCard";
import { CiEdit, CiTrash } from "react-icons/ci";

function Items() {
  const location = useLocation();
  const { arry, img, tag, ttle } = location.state || [];
  const [title, setTitle] = useState('');

    useEffect(() => {
        if ( typeof arry === "object") {
            setTitle("Orders")
        }
        if ( typeof arry[0] === "string" && arry[0].startsWith("http")) {
            setTitle(`Images for ${ttle}`)
        }
        if ( typeof arry[0] === "string") {
            setTitle(`Tags for ${ttle}`)
        }
    }, [])
  return (
    <div className="items">
      <h1>{title}</h1>

      {arry && arry.length > 0 ? (  
          <div className="crdParent">
        {arry.map((item, index) => {
            if (typeof item === "object") {
               return <DetailsCard key={index} title={item.title} image={item.image} />
            }
            if (typeof item === "string" && item.startsWith("http")) {
                return <img className="ok" key={index} src={'https://picsum.photos/200'} alt={`Image ${index}`} />
            }
            if (typeof item === "string") {
               return <input type="text" value={item} key={index} className="tag" onChange={(e) => setItem(e.target.value)} />
            }
        })}
      </div>
    ) : (
     <>
     </>   
    )}

    </div>
  );
}

export default Items;
