
import * as actionType from '../actions.js';

export const deleteUsers = async(user) => {
    console.log("I am called here")
  
      return({
        type: actionType.DELETE_USER,
        payload: user,
      });
     
    
  };