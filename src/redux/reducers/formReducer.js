const formReducer = (state = {}, action) => {
    switch (action.type) {
      case 'UPDATE_FORM_DATA':
        return { ...state, [action.page]: action.data };
      default:
        return state;
    }
  };
  
  export default formReducer;