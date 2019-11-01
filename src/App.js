import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//Store
import {
  saveGame,
  loadGame,
  SaveType,
  LoadType
} from "./Store/Action/saveLoadAction";

//Components
import Story from "./Components/Story";

class App extends Component {
  constructor(props) {
    super(props);

    const { saveGame, loadGame } = this.props;
    this.saveQuick = () => saveGame({ type: SaveType.QUICK });
    this.loadQuick = () => loadGame({ type: LoadType.QUICK });

    this.saveGame = () => saveGame({ type: SaveType.NEW });
    this.loadGame = () => loadGame({ type: LoadType.SLOT, index: 0 });

    this.overrideSaveGame = () =>
      saveGame({ type: SaveType.OVERRIDE, index: 0 });
  }

  render() {
    return (
      <div>
        <button onClick={this.saveQuick}>SaveQuick</button>
        <button onClick={this.loadQuick}>LoadQuick</button>

        <button onClick={this.overrideSaveGame}>OverrideSave</button>

        <button onClick={this.saveGame}>SaveGame</button>
        <button onClick={this.loadGame}>LoadGame</button>
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

const mapDispatchToProps = dispatch =>
  bindActionCreators({ saveGame, loadGame }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
