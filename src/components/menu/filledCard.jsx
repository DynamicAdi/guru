import React, { useState } from 'react'
import {IoAddOutline, IoRemove} from 'react-icons/io5'
import "./filledCard.scss";
import { useArray } from '../../funcs/context';


function FilledCard({id, image, title, desc, veg}) {
  const {removeFromArray, addToArray, isInArray} = useArray();
  const [added, setAdded] = useState(false);
  const handleAdd = (id) => { 
    if (isInArray(id)) {
      return null;
    }
    addToArray(id);
  }
  const handleRemove = (id) => {
    removeFromArray(id);
  }
  return (
    <div className="menuCard">
        <div className="image">
            <img src={image} alt="" />
        </div>
        <div className="veg" style={veg ? {borderColor: 'limegreen'} : {borderColor: 'brown'}}><div className="dot" style={veg ? {background: 'limegreen'} : {background: 'brown'}}></div></div>
    <div className="content">
        <h1>{title}</h1>
        <p>{desc}</p>
        <button className="btn"  onClick={() => {isInArray(id) ? handleRemove(id) : handleAdd(id)}}>
          {isInArray(id) ? (<>
            <IoRemove className='icon remove'/> Remove from plate
          </>) : (
            <>
            <IoAddOutline className='icon'/>Add to plate
            </>
          )}
          </button>
    </div>
    </div>
  )
}

export default FilledCard