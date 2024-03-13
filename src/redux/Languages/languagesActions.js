import { UPDATE_LANGUAGES } from "./languagesTypes"

export const updateLanguages = (data) =>{
    return {
        type: UPDATE_LANGUAGES,
        payload:data
    }

}