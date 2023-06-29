import * as actionType from '../actions'


export const postUsers = async(user) => {
  
  
      return({
        type: actionType.POST_USER,
        payload: user,
      });
     
    
  };

