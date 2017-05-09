import React, {Component} from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router";
import {fetchRandomAnimal} from "../actions/index";

class Random extends Component {

  componentWillMount() {
    this.props.fetchRandomAnimal();
  }

  render() {
    const animal = this.props.randomAnimalState.randomAnimal;

    if (!animal) {
      return <div>Loading Animal...</div>
    }

    return (<Redirect to={`/animal/${animal.id}`}/>);
  };

}

function mapStateToProps(state) {
  return {randomAnimalState: state.randomAnimalState};
}

export default connect(mapStateToProps, {fetchRandomAnimal})(Random);