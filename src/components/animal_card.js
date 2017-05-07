import React from "react";
import {Link} from "react-router-dom";

export default ({animal}) => {

  return (
      <div className={`animal-card ${animal.sex}`}>
        <h4><a href={animal.url} target="_blank">{animal.name}</a></h4>
        <Link to={`/${animal.id}`}>
          <img src={animal.thumb} width={156}/>
        </Link>
        <p>
          Mates: {animal.mates.length}<br/>
          Ancestors: {animal.ancestorCount}<br/>
          Descendants: {animal.descendantCount}
        </p>
      </div>
  )
}