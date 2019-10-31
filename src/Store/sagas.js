import { all } from "redux-saga/effects";
import saga from "./Action/";

export default function* root() {
  yield all(saga);
}
