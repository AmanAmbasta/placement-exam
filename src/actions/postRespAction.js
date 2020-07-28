import { POST_APTI_RESP, POST_LOGI_RESP, POST_QUANT_RESP, POST_ESSAY_RESP, POST_AUTO_RESP } from "../actions/types";

const postFetch = (url, data) => {
    fetch(url, {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        budy: JSON.stringify(data)
    })
        .then(res => res.json())
}

export const POST_APTI_RESP = () => dispatch => {
    postFetch(url, data).then(post => dispatch({
        type: POST_APTI_RESP,
        payload: post
    }))
}
export const POST_LOGI_RESP = () => dispatch => {
    postFetch(url, data).then(post => dispatch({
        type: POST_LOGI_RESP,
        payload: post
    }))
}
export const POST_QUANT_RESP = () => dispatch => {
    postFetch(url, data).then(post => dispatch({
        type: POST_QUANT_RESP,
        payload: post
    }))
}
export const POST_ESSAY_RESP = () => dispatch => {
    postFetch(url, data).then(post => dispatch({
        type: POST_ESSAY_RESP,
        payload: post
    }))
}
export const POST_AUTO_RESP = () => dispatch => {
    postFetch(url, data).then(post => dispatch({
        type: POST_AUTO_RESP,
        payload: post
    }))
}