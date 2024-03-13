import { UPDATE_ACHIEVEMENTS } from "./achievementsTypes"

export const updateAchievements = (data) =>{
    return {
        type: UPDATE_ACHIEVEMENTS,
        payload:data
    }

}