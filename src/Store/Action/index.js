import storySaga from "./storyAction";
import saveSaga from "./saveLoadAction";

let saga = [];
saga = saga.concat(storySaga).concat(saveSaga);

export default saga;
