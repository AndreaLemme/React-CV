import { UPDATE_EDUCATION } from "./educationTypes"

export const updateEducation = (data) =>{
    return {
        type: UPDATE_EDUCATION,
        payload:data
    }

}