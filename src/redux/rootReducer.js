import { combineReducers } from "redux";
import contactReducer from "./Contact/contactReducer";
import aboutReducer from "./About/aboutReducer";
import languagesReducer from "./Languages/languagesReducer";
import experienceReducer from "./Experience/experienceReducer";
import achievementsReducer from "./Achievements/achievementsReducer";
import skillsReducer from "./Skills/skillsReducer";

const rootReducer = combineReducers({
    contact: contactReducer,
    about : aboutReducer,
    languages : languagesReducer,
    experience : experienceReducer,
    achievements : achievementsReducer,
    skills : skillsReducer
})

export default rootReducer