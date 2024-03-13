import { UPDATE_SKILLS } from "./skillsTypes";

const initialState = [];

const skillsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SKILLS:
            return action.payload;
        default:return state;

    }
} 

export default skillsReducer