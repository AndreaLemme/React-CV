import { UPDATE_ABOUT } from "./aboutTypes";

export const updateAbout = (data) =>{
    return {
        type: UPDATE_ABOUT,
        payload: data
    }
}