import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchAnimal} from "../actions/index";
import PropTypes from "prop-types";
import AnimalCard from "./animal_card";
import AnimalParent from "./animal";

const ANCESTORS_LEVELS = 2;

class Animal extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.state = {
      depth: 0,
      animalId: null
    };
  }

  componentWillMount() {

    let state = {};
    const isAncestor = !!this.props.animalId;
    if (isAncestor) {
      state = {
        depth: this.props.depth,
        animalId: this.props.animalId
      };
      // is main animal with animalId loaded from route /:id
    } else {
      state = {
        animalId: this.props.match.params.id
      };
    }

    this.setState(state);

    const fetchAnimal = !this.props.animals[state.animalId];
    if (fetchAnimal) {
      this.props.fetchAnimal(state.animalId);
    }
  }

  componentWillReceiveProps(props) {
    if (!props.match) {
      return;
    }

    let state = {
      depth: 0,
      animalId: props.match.params.id
    };
    this.setState(state);
  }

  renderParents(animal) {

    if (this.state.depth === ANCESTORS_LEVELS) {
      return (null);
    }

    let parents = [];
    if (animal.dadId) {
      parents.push(
          <div className="col-sm-6" key={animal.dadId}>
            <AnimalParent animalId={animal.dadId} depth={this.state.depth + 1}/>
          </div>
      );
    }


    if (animal.momId) {
      parents.push(
          <div className="col-sm-6" key={animal.momId}>
            <AnimalParent animalId={animal.momId} depth={this.state.depth + 1}/>
          </div>
      );
    }

    return parents;
  }

  render() {

    const animal = this.props.animals[this.state.animalId];

    if (!animal) {
      return <div>Loading Animal...</div>
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