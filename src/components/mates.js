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

  renderMates(mates) {

    return mates.map((mate) => {
      return (
          <div className="mate" key={mate.mateId}>
            <Link className="btn btn-info" to="#">Show {mate.childrenIds.length} {this.pluralizeChild(mate.childrenIds.length)}</Link>
            <Animal animalId={mate.mateId}/>
          </div>
      )
    });
  }

  render() {

    return (
        <div className="row mates">
          <h4>Mates</h4>
          {this.renderMates(this.props.mates)}
        </div>
    );
  };
}

export default Mates;