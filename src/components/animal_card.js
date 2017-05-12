import React from "react";
import {Link} from "react-router-dom";

export default ({animal}) => {

  return (
      <div className={`animal-card ${animal.sex}`}>
        <h5><a href={animal.url} target="_blank">{animal.name}</a></h5>
        <Link to={`/animal/${animal.id}`}>
          <img src={animal.thumb} width={156}/>
        </Link>
        <p>
          Mates: {animal.mates.length}<br/>
          Ancestors: {animal.ancestorsCount}<br/>
          Descendants: {animal.descendantsCount}
        </p>
      </div>
  )
}