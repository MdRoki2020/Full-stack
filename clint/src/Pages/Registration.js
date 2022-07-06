import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import Axios from 'axios';

function Registration() {
    const initialValues={
        username:"",
        password:"",
    };

    const validationSchema=Yup.object().shape({
        username:Yup.string().min(3).max(15).required().required(),
        password:Yup.string().min(4).max(20).required(),
    })

    const onSubmit=(data)=>{
        Axios.post("http://localhost:3001/auth",data).then(()=>{
            console.log(data);
        })
    }

  return (
    <div>
      <div className='container'>
      <h2 className='text-center my-3'>Registration</h2>
            <div className='card shadow'>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h6>Registratioin Form</h6>
                            <hr />
                            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                            <Form >
                              <div className='form-group my-2'>
                                  <label className='mb-1'>UserName :</label>
                                  <br/><ErrorMessage name='username' component='span' className='text-danger'/>
                                  <Field name='username' type='text' className='form-control'  placeholder='Enter UserName'/>
                              </div>
                              <div className='form-group my-2'>
                                  <label className='mb-1'>Password :</label>
                                  <br/><ErrorMessage name='password' component='span' className='text-danger'/>
                                  <Field name='password' type='password' className='form-control'  placeholder='Enter Password'/>
                              </div>
                              <div className='form-group my-3'>
                                  <button className='btn btn-primary form-control'  type='submit'>Register</button>
                              </div>
                            </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Registration
