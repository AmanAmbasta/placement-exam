import { GET_APTI_MARKS, GET_LOGI_MARKS, GET_QUANT_MARKS, GET_ESSAY_MARKS, GET_AUTO_MARKS } from '../actions/types';

const getFetch = (url) => {
    fetch(url).then(res => res.json())
}

export const GET_APTI_MARKS = () => dispatch => {
    getFetch(url).then(data =>
        dispatch({
            type: GET_APTI_MARKS,
            payload: data
        })
    )
}
export const GET_LOGI_MARKS = () => dispatch => {
    getFetch(url).then(data =>
        dispatch({
            type: GET_LOGI_MARKS,
            payload: data
        })
    )
}
export const GET_QUANT_MARKS = () => dispatch => {
    getFetch(url).then(data =>
        dispatch({
            type: GET_QUANT_MARKS,
            payload: data
        })
    )
}
export const GET_ESSAY_MARKS = () => dispatch => {
    getFetch(url).then(data =>
        dispatch({
            type: GET_ESSAY_MARKS,
            payload: data
        })
    )
}
export const GET_AUTO_MARKS = () => dispatch => {
    getFetch(url).then(data =>
        dispatch({
            type: GET_AUTO_MARKS,
            payload: data
        })
    )
}