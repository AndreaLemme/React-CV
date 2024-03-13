import { UPDATE_EDUCATION } from "./educationTypes";

const initialState = [];

const educationReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_EDUCATION:
            return action.payload;
        default:return state;

    }
} 

export default educationReducer