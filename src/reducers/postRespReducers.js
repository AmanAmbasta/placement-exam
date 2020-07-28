import { POST_APTI_RESP, POST_LOGI_RESP, POST_QUANT_RESP, POST_ESSAY_RESP, POST_AUTO_RESP } from "../actions/types";

const initalState = {
    items: [],
    resp: {}
}
export default function (state = initalState, action) {
    switch (action.type) {
        case POST_APTI_RESP:
            return {
                ...state,
                resp: action.payload
            }
            break;

        case POST_LOGI_RESP:
            return {
                ...state,
                resp: action.payload
            }
            break;

        case POST_QUANT_RESP:
            return {
                ...state,
                resp: action.payload
            }
            break;

        case POST_ESSAY_RESP:
            return {
                ...state,
                resp: action.payload
            }
            break;

        case POST_AUTO_RESP:
            return {
                ...state,
                resp: action.payload
            }
            break;
    }
    return state;
}
