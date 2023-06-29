import { useStore } from 'react-redux';
import * as actionType from '../actions.js';

const initialState= {
  users:[],
 
  
};

const userReducer= (state = initialState, action)=>{
  switch (action.type) {
    
    case actionType.GET_USER:
        console.log('heelpp')
        return{ 
          users:[...action.payload]
    }
    case actionType.POST_USER:
       console.log(action.payload)
        state.users.push(action.payload)
    
    case actionType.UPDATE_USER:
      state.users.map((user)=>{
        console.log("user",user._id)
        console.log("payload",action.payload)
        if(user._id == action.payload._id){
          return {
            ...user,
            ...action.payload,
          }
        }
        else 
        {
          return user
        }
      })
    case actionType.DELETE_USER:
      state.users.filter((user)=>
      {
        return  user._id!=action.payload._id
        })
      
    
           
      default:
      return state;
  }

};

export default userReducer;