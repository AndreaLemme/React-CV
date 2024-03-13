import { UPDATE_SKILLS } from "./skillsTypes"

export const updateSkills = (data) =>{
    return {
        type: UPDATE_SKILLS,
        payload:data
    }

}