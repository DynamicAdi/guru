import React, { useState } from 'react'
import { IoArrowForwardOutline } from "react-icons/io5";
import "./filledCard.scss";

function FilledCard({id, image, title, desc, veg}) {
  return (
    <div className="menuCard">
        <div className="image">
            <img src="https://picsum.photos/200" alt="" />
        </div>
     <div className="content">
        <h1>Title of projects</h1>
        <button className="btn">
          Explore <IoArrowForwardOutline className='icon'/>
    </button>
    </div>
    </div>
  )
}

export default FilledCard