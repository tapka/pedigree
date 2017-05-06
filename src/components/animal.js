import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchAnimal} from "../actions/index";
import PropTypes from "prop-types";
import AnimalCard from "./animal_card";
import AnimalParent from "./animal";

class Animal extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {

    if (this.props.animalId) {
      this.active = false;
      this.animalId = this.props.animalId;
    } else {
      this.active = true;
      this.animalId = this.props.match.params.id;
    }
    this.props.fetchAnimal(this.animalId, this.active);
  }


  renderParents(animal) {

    let parents = [];
    if (animal.dadId) {
      parents.push (
          <div className="col-sm-6" key={animal.dadId}>
            <AnimalParent animalId={animal.dadId}/>
          </div>
      );
    }


    if (animal.momId) {
      parents.push (
          <div className="col-sm-6" key={animal.momId}>
            <AnimalParent animalId={animal.momId}/>
          </div>
       );
     }

     return parents;
  }

  render() {

    const animal = this.props.animals[this.active ? this.props.animals.active : this.animalId];

    if (!animal) {
      return <div>Loading...</div>
    }

    return (
        <div>
          <div className="row">

          {this.renderParents(animal)}

          </div>
          <div className="row">
            <AnimalCard animal={animal}/>
          </div>
        </div>
    );
  };

}

function mapStateToProps(state) {
  return {animals: state.animals};
}

export default connect(mapStateToProps, {fetchAnimal})(Animal);