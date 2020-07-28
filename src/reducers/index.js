import { combineReducers } from "redux";

import getQues from "./getQuesReucers";
import postResp from "./postRespReducers";
import getMarks from "./getMarksReducer";

export default combineReducers({
    getQues,
    postResp,
    getMarks,
})