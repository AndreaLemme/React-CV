import { UPDATE_ACHIEVEMENTS } from "./achievementsTypes";

const initialState = [];

const achievementsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_ACHIEVEMENTS:
            return action.payload;
        default:return state;

    }
} 

export default achievementsReducer