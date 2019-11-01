import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import queryString from "querystring";

//Store
import {
  saveGame,
  loadGame,
  SaveType,
  LoadType
} from "./Store/Action/saveLoadAction";

import { patreon as patreonAPI, oauth as patreonOAuth } from "patreon";

//Components
import Story from "./Components/Story";

function teste(code) {
  const CLIENT_SECRET =
    "khm35qBAe5pNlH6RFZkyw8DScM7wzafGbUSN5BD-S85lxk9WRpO7XS23hCOnzYG6";
  const CLIENT_ID =
    "evT5pxgeAoFluzvZbqhmtxVd2gXXPmK9T_6hYm1o0IVWzeQMOO1hylBsTknQYdQZ";

  const patreonOAuthClient = patreonOAuth(CLIENT_ID, CLIENT_SECRET);
  const oauthGrantCode = code;
  const redirectURL = "https://text-base-engine.herokuapp.com/auth/";

  patreonOAuthClient
    .getTokens(oauthGrantCode, redirectURL)
    .then(tokensResponse => {
      const patreonAPIClient = patreonAPI(tokensResponse.access_token);
      return patreonAPIClient("/current_user");
    })
    .then(({ store }) => {
      // store is a [JsonApiDataStore](https://github.com/beauby/jsonapi-datastore)
      // You can also ask for result.rawJson if you'd like to work with unparsed data
      console.log(store);
    })
    .catch(err => {
      console.error("error!", err);
    });
}

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

    this.backHistory = () => loadGame({ type: LoadType.PREVIOUS });
    this.nextHistory = () => loadGame({ type: LoadType.NEXT });

    this.state = queryString.parse(this.props.location.search.replace("?", ""));
  }

  render() {
    return (
      <div>
        <button onClick={this.saveQuick}>SaveQuick</button>
        <button onClick={this.loadQuick}>LoadQuick</button>

        <button onClick={this.overrideSaveGame}>OverrideSave</button>

        <button onClick={this.saveGame}>SaveGame</button>
        <button onClick={this.loadGame}>LoadGame</button>
        <button onClick={this.backHistory}>Back</button>
        <button onClick={this.nextHistory}>Next</button>
        <button onClick={() => console.log(this.props.store)}>
          Print Console Store
        </button>
        <button onClick={() => teste(this.state.code)}>Get Tocken</button>
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
