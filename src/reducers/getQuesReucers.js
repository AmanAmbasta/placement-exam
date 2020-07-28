import { GET_APTI_QUES, GET_LOGI_QUES, GET_QUANT_QUES, GET_ESSAY_QUES, GET_AUTO_QUES } from '../actions/types';

const initalState = {
    questions: [],
}
export default function (state = initalState, action) {
    switch (action.type) {
        case GET_APTI_QUES:
            return {
                ...state,
                questions: action.payload
            };
            break;

        case GET_LOGI_QUES:
            return {
                ...state,
                questions: action.payload
            };
            break;

        case GET_QUANT_QUES:
            return {
                ...state,
                questions: action.payload
            };
            break;

        case GET_ESSAY_QUES:
            return {
                ...state,
                questions: action.payload
            };
            break;

        case GET_AUTO_QUES:
            return {
                ...state,
                questions: action.payload
            };
            break;
    }
    return state;
}