import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//Config
import { actions } from "./Store/Config";
import { saveGame, loadSave } from "./Persistence/saveGame";

//Store
import { setQuickSave } from "./Store/Action/saveLoadAction";

//Components
import Story from "./Components/Story";

class App extends Component {
  constructor(props) {
    super(props);

    this.saveQuick = () => saveGame(this.props.store, this.props.setQuickSave);
    this.loadQuick = () => loadSave(this.props.quickSave, this.props);
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
