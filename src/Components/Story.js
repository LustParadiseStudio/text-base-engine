import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//Config
import { registerComponents } from "../Game/Config/storyConfig";

//Store
import { setPageStory } from "../Store/Action/storyAction";

class Story extends Component {
  render() {
    const { pageID, pageData, setPageStory } = this.props;

    if (pageID) {
      let componentRender = null;
      let page = registerComponents.find(page => page.id === pageID);

      componentRender = React.createElement(page.component, { data: pageData });
      return <div>{componentRender}</div>;
    }

    setPageStory("liveroom");
    return <div></div>;
  }
}

const mapStateToProps = store => ({
  pageID: store.storyState.pageID,
  pageData: store.storyState.pageData,  
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setPageStory }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Story);
