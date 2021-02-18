import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

const roodteducer = combineReducers({
  counter,
  todos,
});

export default roodteducer;
