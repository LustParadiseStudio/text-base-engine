import { PlayerActionType } from "../Reducers/playerReducer";
import { StoryActionType } from "../Reducers/storyReducer";

export const saveStates = [
  {
    nameState: "playerState",
    nameAction: PlayerActionType.SET
  },
  {
    nameState: "storyState",
    nameAction: StoryActionType.SET
  }
];
