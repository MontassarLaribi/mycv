import { combineReducers } from "redux";

import zoom from "./zoom/zoomSlice";

const reducers = combineReducers({
  zoom,
});

export default reducers;
