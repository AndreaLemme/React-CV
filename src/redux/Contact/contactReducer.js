import { UPDATE_CONTACT } from "./contactTypes";

const initialState = {};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CONTACT:
      console.log('Contact reducer called with action:', action); // Add this line
      return action.payload;
    default:
      return state;
  }
};

export default contactReducer;