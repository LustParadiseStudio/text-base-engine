import { setStory } from "../Action/storyAction";
import { setPlayerStatus } from "../Action/playerAction";

export const saveStates = [
  {
    nameState: "playerState",
    nameAction: "setPlayerStatus"
  },
  {
    nameState: "storyState",
    nameAction: "setStory"
  }
];

export const actions = { setStory, setPlayerStatus };
