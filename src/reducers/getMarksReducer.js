import { GET_APTI_MARKS, GET_LOGI_MARKS, GET_QUANT_MARKS, GET_ESSAY_MARKS, GET_AUTO_MARKS } from "../actions/types";

const initalState = {
    marks: {}
}
export default function (state = initalState, action) {
    switch (action.type) {
        case GET_APTI_MARKS:
            return {
                ...state,
                marks: action.payload
            }
            break;
        case GET_LOGI_MARKS:
            return {
                ...state,
                marks: action.payload
            }
            break;
        case GET_QUANT_MARKS:
            return {
                ...state,
                marks: action.payload
            }
            break;
        case GET_ESSAY_MARKS:
            return {
                ...state,
                marks: action.payload
            }
            break;
        case GET_AUTO_MARKS:
            return {
                ...state,
                marks: action.payload
            }
            break;
    }
    return state;
}