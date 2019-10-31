import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { setPageStory } from "../Store/Action/storyAction";

class LiveroomComponent extends Component {
  render() {
    const { data, setPageStory } = this.props;

    return (
      <div>
        <h1>Liveroom {data.randomNumber}</h1>
        <button onClick={() => setPageStory("liveroom", false)}>
          Liveroom Refresh
        </button>

        <button onClick={() => setPageStory("bathroom", false)}>
          Bathroom
        </button>
      </div>
    );
  }
}

class BathroomComponent extends Component {
  render() {
    const { data, setPageStory } = this.props;

    return (
      <div>
        <h1>Bathroom {data.randomNumber}</h1>
        <button onClick={() => setPageStory("liveroom", false)}>
          Liveroom
        </button>
      </div>
    );
  }
}

const mapStateToProps = store => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setPageStory }, dispatch);

const Liveroom = connect(
  mapStateToProps,
  mapDispatchToProps
)(LiveroomComponent);

const Bathroom = connect(
  mapStateToProps,
  mapDispatchToProps
)(BathroomComponent);

export { Bathroom, Liveroom };
