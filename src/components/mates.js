import React, {Component} from "react";
import Animal from "./animal";
import {Link} from "react-router-dom";

class Mates extends Component {

  pluralizeChild(count) {
    if (count === 1) {
      return "child";
    }

    return "children";
  }

  renderMates(animal) {

    return animal.mates.map((mate) => {
      return (
          <div className="mate" key={mate.mateId}>
            <Link className="button" to={`/marriage/${animal.id}-${mate.mateId}`}>
              Show {mate.childrenCount} {this.pluralizeChild(mate.childrenCount)}
              </Link>
            <Animal animalId={mate.mateId}/>
          </div>
      )
    });
  }

  render() {

    return (
        <div className="row mates">
          <h4>Mates</h4>
          {this.renderMates(this.props.animal)}
        </div>
    );
  };
}

export default Mates;