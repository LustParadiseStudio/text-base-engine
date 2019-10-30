import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//Config
import { allComponents } from "../Game/Config/storyConfig";

//Store
import { setPageStory } from "../Store/Action/storyAction";

class Story extends Component {
  render() {
    const {
      currentPage,
      isRefreshOrLoad,
      pageData,
      setPageStory,
      forceUpdate
    } = this.props;

    let componentRender = null;
    if (currentPage == null) {
      setPageStory("Liveroom", false);
    } else {
      var props = { forceUpdate };

      if (isRefreshOrLoad) {
        props.data = pageData;
      }

      var component = allComponents[currentPage];
      componentRender = React.createElement(component, props);
    }

    return <div>{componentRender}</div>;
  }
}

const mapStateToProps = store => ({
  currentPage: store.storyState.currentPage,
  pageData: store.storyState.currentPageState,
  isRefreshOrLoad: store.storyState.isLoad,
  forceUpdate: store.storyState.forceUpdate
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setPageStory }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Story);
