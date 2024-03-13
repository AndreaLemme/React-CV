import { UPDATE_EXPERIENCE } from "./experienceTypes";

const initialState = [];

const experienceReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_EXPERIENCE:
            return action.payload;
        default:return state;

    }
} 

export default experienceReducer