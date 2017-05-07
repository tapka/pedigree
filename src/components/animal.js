import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchAnimal} from "../actions/index";
import PropTypes from "prop-types";
import AnimalCard from "./animal_card";

class Animal extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.state = {
      animalId: null
    };
  }

  componentWillMount() {

    let state = {
      animalId: this.props.animalId
    };

    this.setState(state);

    const fetchAnimal = !this.props.animals[state.animalId];
    if (fetchAnimal) {
      this.props.fetchAnimal(state.animalId);
    }
  }

  render() {

    const animal = this.props.animals[this.state.animalId];

    if (!animal) {
      return <div>Loading Animal...</div>
    }

    return (
        <AnimalCard animal={animal}/>
    );
  };

}

function mapStateToProps(state) {
  return {animals: state.animals};
}

export default connect(mapStateToProps, {fetchAnimal})(Animal);