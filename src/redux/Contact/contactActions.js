import { UPDATE_CONTACT } from "./contactTypes";

export const updateContact= (data) =>{
    return{
        type: UPDATE_CONTACT,
        payload: data
    }

}