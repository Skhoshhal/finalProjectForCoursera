import * as ActionTypes from './ActionType';
const initialStates = {
    isLoading: true,
    errMess: null,
    data:[]
};
export const Data = (state = initialStates, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_DATA:
            return {...state, isLoading: false, errMess: null, data: action.data};

        case ActionTypes.DATA_LOADING:
            return {...state, isLoading: true, errMess: null, data: []};

        case ActionTypes.DATA_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};
