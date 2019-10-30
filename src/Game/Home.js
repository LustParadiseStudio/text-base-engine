import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { setPageStory, saveStoryState, setLoad } from "../Store/Action/storyAction";
import { StoryBase } from "../Components/StoryBase";

class LiveroomComponent extends StoryBase {
  state = {
    randomNumber: null
  };

  constructor(props) {
    super(props);
    this.key = "Liveroom";
  }

  buildData() {
    return { randomNumber: Math.random() };
  }

  render() {
    const { setPageStory } = this.props;
    let data = this.getData();

    return (
      <div>
        <h1>Liveroom {data.randomNumber}</h1>
        <button onClick={() => setPageStory("Liveroom", false)}>
          Liveroom Refresh
        </button>

        <button onClick={() => setPageStory("Bathroom", false)}>Bathroom</button>
      </div>
    );
  }
}

class BathroomComponent extends StoryBase {
  state = {
    randomNumber: null
  };

  constructor(props) {
    super(props);
    this.key = "Bathroom";
  }

  buildData() {
    return { randomNumber: Math.random() };
  }

  render() {
    const { setPageStory } = this.props;
    const data = this.getData();

    return (
      <div>
        <h1>Bathroom {data.randomNumber}</h1>
        <button onClick={() => setPageStory("Liveroom", false)}>Liveroom</button>
      </div>
    );
  }
}

const mapStateToProps = store => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setPageStory, saveStoryState, setLoad }, dispatch);

const Liveroom = connect(
  mapStateToProps,
  mapDispatchToProps
)(LiveroomComponent);

const Bathroom = connect(
  mapStateToProps,
  mapDispatchToProps
)(BathroomComponent);

export { Bathroom, Liveroom };
