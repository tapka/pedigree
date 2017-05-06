import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchAnimal} from "../actions/index";
import PropTypes from 'prop-types';

class AnimalCard extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchAnimal(this.props.match.params.id);
  }

  render() {
    const {animal} = this.props;

    if (!animal) {
      return <div>Loading...</div>
    }
    return (
        <div>
          <h3><a href={animal.url} target="_blank">{animal.name}</a></h3>
          <img src={animal.thumb}/>
          <p>{animal.dadId}</p>
          <p>{animal.momId}</p>
          <p>{animal.sex}</p>
        </div>
    );
  };
}

function mapStateToProps(state) {
  return {animal: state.animals.animal};
}

export default connect(mapStateToProps, {fetchAnimal})(AnimalCard);