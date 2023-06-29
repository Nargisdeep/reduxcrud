import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModelState from 'react-bootstrap/Modal'
import {useFormik,FormikProvider } from 'formik';
import { Field, Form, Formik, FormikProps } from 'formik';
import { Services } from '../services/sevices';
import { useDispatch, useSelector } from "react-redux";


const PostModel=(props)=>{
   
    const dispatch = useDispatch();
 

    return(
        <>
        <Modal show={props.postshow} onHide={props.handlePostClose}>
                <Modal.Header closeButton>
                <Modal.Title>Fill The Form:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Formik 
                    initialValues={props.user}  
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Required!';
                        } 
                        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
                            errors.email = 'Invalid email address!';
                        }
                        // else{
                        //     for(let i in data){
                        //         if(data[i].email==values.email){
                        //             errors.email ='Email Already in use!'
                        //         }
                        //     }
                        // }
                        if(!values.password){
                            errors.password = 'Required!';
                        }
                        // else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}}$/i.test(values.password)){
                        //     errors.email = 'Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters';
                        // }
                        // else{
                        //     for(let i in data){
                        //         if(data[i].password==values.password){
                        //             errors.email ='Password Already Taken!'
                        //         }
                        //     }
                        // }
                        if(!values.name){
                            errors.name = 'Required!';
                        }
                        if(!values.age){
                            errors.age = 'Required!';
                        }
                        if(!values.city){
                            errors.city = 'Required!';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {

                       Services.postUsers(dispatch,values)
                       Services.getUsers(dispatch)
                       props.setPostShow(false)
                       
                    }}>
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                        }) => (
                                <form>
                                    <div class="form-group">
                                        <label>Enter Your Email</label>
                                        <input  
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        class="form-control"
                                        />
                                    </div>
                                    {errors.email && touched.email && errors.email}
                                    <div class="form-group">
                                    <label>Enter Your Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                        class="form-control"
                                    />
                                    </div>
                                    {errors.password && touched.password && errors.password}
                                    <div class="form-group">
                                    <label>Enter Your Name</label>
                                    <input
                                        type="name"
                                        name="name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                        class="form-control"
                                    />
                                    </div>
                                    {errors.name && touched.name && errors.name}
                                    <div class="form-group">
                                    <label>Enter Your Age</label>
                                    <input
                                        type="age"
                                        name="age"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.age}
                                        class="form-control"
                                    />
                                    </div>
                                    {errors.age && touched.age && errors.age}
                                    <div class="form-group">
                                    <label>Enter Your City</label>
                                    <Field as="select" name="city" class="form-control">
                                        <option>Choose City</option>
                                        <option value="Hyderabad">Hyderabad</option>
                                        <option value="Chennai">Chennai</option>
                                        <option value="Bengalore">Bengalore</option>
                                        <option value="Chandigarh">Chandigarh</option>
                                        <option value="Delhi">Delhi</option>
                                    </Field>
                                    
                                    </div><br></br>
                                    {errors.city && touched.city && errors.city}
                                    <Button variant="primary"  type="submit" value="Submit" onClick={handleSubmit} disabled={isSubmitting}>
                                    Submit
                                    </Button>
                                    </form>
                            )}
                </Formik>
                </Modal.Body>
                <Modal.Footer>
                    Thank You!
                </Modal.Footer>
            </Modal>
        </>


     
    )
}

export default PostModel