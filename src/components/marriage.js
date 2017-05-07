import React, {Component} from "react";
import PropTypes from "prop-types";
import Animal from "./animal";
import {connect} from "react-redux";
import {fetchMarriage} from "../actions/index";

class Marriage extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchMarriage(this.props.match.params.id, this.props.match.params.mateId);
  }

  renderChildren(childrenIds) {

    if (!childrenIds) {
      return (<div>Loading Children...</div>);
    }

    return childrenIds.map((id) => {
      return (
          <div className="child" key={id}>
            <Animal animalId={id}/>
          </div>
      )
    });
  }

  render() {

    return (
        <div>
          <div className="row">
            <div className="col-xs-6">
              <Animal animalId={this.props.match.params.id}/>
            </div>
            <div className="col-xs-6">
              <Animal animalId={this.props.match.params.mateId}/>
            </div>
          </div>

          <hr/>

          <div className="row children">

            <h4>Children</h4>

            {this.renderChildren(this.props.marriage.marriage)}

          </div>
        </div>
    );
  };

}

function mapStateToProps(state) {
  return {marriage: state.marriage};
}

export default connect(mapStateToProps, {fetchMarriage})(Marriage);