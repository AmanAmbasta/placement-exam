import { GET_APTI_QUES, GET_LOGI_QUES, GET_QUANT_QUES, GET_ESSAY_QUES, GET_AUTO_QUES } from '../actions/types';

const getFetch = (url) => {
    fetch(url,)
        .then(res => res.json())
}

export const GET_APTI_QUES = () => dispatch => {
    getFetch(`${url}/question/apti`).then(data =>
        dispatch({
            type: GET_APTI_QUES,
            payload: data
        })
    )
}
export const GET_LOGI_QUES = () => dispatch => {
    getFetch(`${url}/question/logi`).then(data =>
        dispatch({
            type: GET_LOGI_QUES,
            payload: data
        })
    )
}
export const GET_QUANT_QUES = () => dispatch => {
    getFetch(`${url}/question/quant`).then(data =>
        dispatch({
            type: GET_QUANT_QUES,
            payload: data
        })
    )
}
export const GET_ESSAY_QUES = () => dispatch => {
    getFetch(`${url}/question/essay`).then(data =>
        dispatch({
            type: GET_ESSAY_QUES,
            payload: data
        })
    )
}
export const GET_AUTO_QUES = () => dispatch => {
    getFetch(`${url}/question/auto`).then(data =>
        dispatch({
            type: GET_AUTO_QUES,
            payload: data
        })
    )
}