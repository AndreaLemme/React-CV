import { UPDATE_EXPERIENCE } from "./experienceTypes"

export const updateExperience = (data) =>{
    return {
        type: UPDATE_EXPERIENCE,
        payload:data
    }

}