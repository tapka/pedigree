import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchAnimal} from "../actions/index";
import PropTypes from "prop-types";
import AnimalCard from "./animal_card";
import AnimalParent from "./animal";

/**
 * pujde se zbavit animalId? Idealne bych ve state chtel mit jenom animal
 * pujde se zbavit active?
 * pujde se zbavit znovunacitani jiz nactenych zvirat?
 * pujde se zbavit loading pri dosazeni max depth?
 */

class Animal extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.state = {
      active: false,
      depth: null,
      animalId: null
    };
  }

  componentWillMount() {

    let state = {};
    if (this.props.animalId) {
      state = {
        depth: this.props.depth + 1,
        active: false,
        animalId: this.props.animalId
      };
    } else {
      state = {
        depth: 0,
        active: true,
        animalId: this.props.match.params.id
      };
    }

    if (state.depth > 2) {
      return;
    }

    this.setState(state);

    this.props.fetchAnimal(state.animalId, state.active);
  }

  componentWillReceiveProps(props) {
    if (!props.match) {
      return;
    }

    if (props.match.params.id === props.animals.active) {
      return;
    }

    let state = {
      depth: 0,
      active: true,
      animalId: props.match.params.id
    };
    this.setState(state);

    this.props.fetchAnimal(state.animalId, state.active);
  }

  renderParents(animal) {

    let parents = [];
    if (animal.dadId) {
      parents.push (
          <div className="col-sm-6" key={animal.dadId}>
            <AnimalParent animalId={animal.dadId} depth={this.state.depth}/>
          </div>
      );
    }


    if (animal.momId) {
      parents.push (
          <div className="col-sm-6" key={animal.momId}>
            <AnimalParent animalId={animal.momId} depth={this.state.depth}/>
          </div>
       );
     }

     return parents;
  }

  render() {

    const animal = this.props.animals[this.state.active ? this.props.animals.active : this.state.animalId];

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