
import * as actionType from '../actions.js';

export const getUsers = async(users) => {
  
  
      return({
        type: actionType.GET_USER,
        payload: users,
      });
     
    
  };