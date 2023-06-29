import React, { useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'
import PostModel from '../components/PostModel';
import UpdateModel from '../components/UpdateModel';
import DeleteModel from '../components/DeleteModel';
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from '../redux/actions/get.actions';
import { Services } from '../services/sevices';
import './MainView.css'



 const MainView=()=>{
const [data,setData]=useState(null)
const [postshow,setPostShow]=useState(false)
const [updateshow,setUpdateShow]=useState(false)
const [deleteshow,setDeleteShow]=useState(false)
const handlePostShow=()=>{ setPostShow(true)}
const handlePostClose=()=>{setPostShow(false)}
const handleUpdateShow=()=>{setUpdateShow(true)}
const handleUpdateClose=()=>{setUpdateShow(false)}
const handleDeleteShow=()=>{setDeleteShow(true)}
const handleDeleteClose=()=>{setDeleteShow(false)}
const [user,setUser]=useState({email:'',name:'',password:'',age:'',city:''})
console.log(useSelector((state)=>state.userData))
const list = useSelector((state) => state.userData.users);
    const dispatch = useDispatch();
   
    useEffect(()=>{
           console.log(list)
           Services.getUsers(dispatch)
          
    },[dispatch])

    const handleAction=(_id,action)=>{
       setUser(list.find((ele)=>ele._id==_id))

       if(action=="update"){
        handleUpdateShow()
       }
       if(action=="delete"){
        console.log("delete")
        handleDeleteShow()
       }
    }
    const handleDelete=()=>{
        if(user){
            Services.deleteUsers(dispatch,user._id)
            Services.getUsers(dispatch)
            handleDeleteClose()
        }
    }

    console.log(list)
return(
    <>
    <Button variant="success"  align="center"  onClick={handlePostShow}>Add Person</Button>{' '}
    <PostModel user={user} setUser={setUser} postshow={postshow} handlePostShow={handlePostShow} handlePostClose={handlePostClose} setPostShow={setPostShow}/>
    <UpdateModel user={user} setUser={setUser} updateshow={updateshow} handleUpdateShow={handleUpdateShow} handleUpdateClose={handleUpdateClose} setUpdateShow={setUpdateShow}/>
    <DeleteModel user={user} setUser={setUser} deleteshow={deleteshow} handleDeleteShow={handleDeleteShow} handleDeleteClose={handleDeleteClose} setDeleteShow={setDeleteShow} handleDelete={handleDelete}/>
    <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th >Age</th>
                        <th>City</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        
                        
                    </tr>
                </thead>
                <tbody>
                    {list && list.length && (
                        <> 
                        {list.map((element,index) => {
                              return (
                                    <tr>
                                        <td>{index}</td>
                                        <td>{element.email}</td>
                                        <td>{element.name}</td>
                                        <td>{element.age}</td>
                                        <td>{element.city}</td>
                                        <td><Button onClick={()=>{handleAction(element._id,"update")}}  >EDIT</Button></td>
                                        
                                        <td><Button onClick={()=>{handleAction(element._id,"delete")}}  >DELETE</Button></td>

                                    </tr>
                                )}
                            )}
                        </>
                    )}
                </tbody>
            </Table>
        
            
        </>
  
)
    
}


export default MainView