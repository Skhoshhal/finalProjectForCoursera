import * as ActionTypes from "./ActionType";

export const fetchData = () => dispatch => {
    dispatch(dataLoading(true));
    const proxy = "https://thingproxy.freeboard.io/fetch/";
    const apiUrl = `https://www.spreadshirt.com/shopData/list?query=K118614&locale=us_US`;
    const url = `${proxy}${apiUrl}`;
    return fetch(url)
        .then(
            response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error(
                        `Error ${response.status} : ${response.statusText}`
                    );
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            }
        )
        .then(async response => await response.json())
        .then(async data => await dispatch(addData(data)))
        .catch(async error => await dispatch(dataFailed(error.message)));
};

export const addData = data => ({
    type: ActionTypes.FETCH_DATA,
    data
});

export const dataLoading = () => ({
    type: ActionTypes.DATA_LOADING
});

export const dataFailed = errmess => ({
    type: ActionTypes.DATA_FAILED,
    payload: errmess
});
