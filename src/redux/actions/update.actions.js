import * as actionType from '../actions'


export const updateUsers = async(user) => {
  
  
      return({
        type: actionType.UPDATE_USER,
        payload: user,
      });
     
    
  };
