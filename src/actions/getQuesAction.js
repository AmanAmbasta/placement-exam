import { GET_APTI_QUES, GET_LOGI_QUES, GET_QUANT_QUES, GET_ESSAY_QUES, GET_AUTO_QUES } from '../actions/types';

const url = process.env.REACT_APP_API_URL
const getFetch = (url) => {
    return fetch(url)
        .then(res => res.json())
}

export const getAptiQues = () => dispatch => {
    console.log("Get Fetch action is called");
    fetch(`${url}/ques/apti/tcs/0`)
        .then(res => res.json())
        .then(data => dispatch({
            type: GET_APTI_QUES,
            payload: data
        })
        )
}
export const getLogiQues = () => dispatch => {
    getFetch(`${url}/question/logi`).then(data =>
        dispatch({
            type: GET_LOGI_QUES,
            payload: data
        })
    )
}
export const getQuantQues = () => dispatch => {
    getFetch(`${url}/question/quant`).then(data =>
        dispatch({
            type: GET_QUANT_QUES,
            payload: data
        })
    )
}
export const getEssayQues = () => dispatch => {
    getFetch(`${url}/question/essay`).then(data =>
        dispatch({
            type: GET_ESSAY_QUES,
            payload: data
        })
    )
}
export const getAutoQues = () => dispatch => {
    getFetch(`${url}/question/auto`).then(data =>
        dispatch({
            type: GET_AUTO_QUES,
            payload: data
        })
    )
}