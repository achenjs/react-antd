import * as actionTypes from '../constants/headerNav';

const initialState = {};

export default function headerNav (state = initialState, action) {
    switch (action.type) {
        case actionTypes.HEADERNAV_UPDATE:
            return action.data;
        default:
            return state;
    }
}