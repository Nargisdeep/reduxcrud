import axios from 'axios'


export const Services={
getUsers:async(dispatch)=>{
    return axios.get("http://localhost:3000/users/new/get")
    .then(function (response){
        console.log(response)
        dispatch({
            type:'GET_USER',
            payload:response.data.users
        })
    })
    .catch(function(err){
        dispatch({
            type:'GET_USER',
            error:true
        })
    })
},
postUsers:async(dispatch,values)=>{
    return axios.post("http://localhost:3000/users/post",values)
    .then((response)=>{
        console.log(response)
        dispatch({
            type:'POST_USER',
            payload:response.data.user
        })
    })
    .catch((err)=>{
        dispatch({
            type:'POST_USER',
            error:true
        })

    })
},
updateUsers:async(dispatch,_id,values)=>{
    return axios.put(`http://localhost:3000/users/put/${_id}`,values)
    .then((response)=>{
        console.log(response)
        dispatch({
            type:'UPDATE_USER',
            payload:response.data.user
        })
    })
    .catch((err)=>{
        dispatch({
            type:'UPDATE_USER',
            error:true
        })
    })
},
deleteUsers:async(dispatch,_id)=>{
    return axios.delete(`http://localhost:3000/users/delete/${_id}`)
    .then((response)=>{
        console.log(response)
        dispatch({
            type:'DELETE_USER',
            payload:_id
        })
    })
    .catch((err)=>{
          dispatch({
            type:'DELETE_USER',
            error:true
          })
    })
}
}