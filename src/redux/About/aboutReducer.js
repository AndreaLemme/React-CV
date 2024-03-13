import { UPDATE_ABOUT } from "./aboutTypes";

const initialState ={}

const aboutReducer = (state=initialState,action) => {
    switch(action.type){
        case UPDATE_ABOUT: 
        return action.payload;
        default:
          return state;
    }
}

export default aboutReducer