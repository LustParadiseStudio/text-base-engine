import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//Config
import { saveStates, actions } from "./Store/Config";

//Store
import { setQuickSave } from "./Store/Action/saveLoadAction";

//Components
import Story from "./Components/Story";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    this.saveQuick = this.saveQuick.bind(this);
    this.loadQuick = this.loadQuick.bind(this);
  }

  saveQuick() {
    const { store, setQuickSave } = this.props;
    let data = {};

    saveStates.forEach(state => {
      let name = state.nameState;
      data[name] = store[name];
    });

    let jsonData = JSON.stringify(data);
    setQuickSave(jsonData);
  }

  loadQuick() {
    const { quickSave } = this.props;
    let data = JSON.parse(quickSave);

    saveStates.forEach(state => {
      this.props[state.nameAction](data[state.nameState]);
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.saveQuick}>SaveGame</button>
        <button onClick={this.loadQuick}>LoadGame</button>

        <button onClick={() => console.log(this.props.store)}>
          Print Console Store
        </button>
        <Story />
      </div>
    );
  }
}

const mapStateToProps = store => ({
  store: store,
  quickSave: store.saveLoadState.quickSave
});

var mapDispatch = Object.assign({ setQuickSave }, actions);
const mapDispatchToProps = dispatch =>
  bindActionCreators(mapDispatch, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
