import { Component } from "react";

export class StoryBase extends Component {
  key = "";

  buildData() {}

  getData() {
    const { data, saveStoryState } = this.props;

    if (data === undefined) {
      var newData = this.buildData();
      saveStoryState(newData);
      return newData;
    } else {
      return data;
    }
  }
}
