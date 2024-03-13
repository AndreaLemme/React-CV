import { UPDATE_LANGUAGES } from "./languagesTypes";

const initialState = [];

const languagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_LANGUAGES:
            return action.payload;
        default:return state;

    }
} 

export default languagesReducer