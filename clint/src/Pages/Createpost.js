import React from 'react'
import Axios from 'axios';
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';

function Createpost() {

    let navigate = useNavigate ();

    const onSubmit=(data)=>{
        Axios.post('http://localhost:3001/posts',data).then((res)=>{
            navigate('/');
        })
    }

    const initialValues={
        title:"",
        postText:"",
        username:"",
    };

    const validationSchema=Yup.object().shape({
        title:Yup.string().required(),
        postText:Yup.string().required(),
        username:Yup.string().min(3).max(15).required(),
    })

  return (
    <div className='createPostPage'>
      <div className='container'>
        <h2 className='text-center my-3'>Get In Touch</h2>
            <div className='card shadow'>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h6>Contact Form</h6>
                            <hr />
                            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                            <Form >
                              <div className='form-group'>
                                  <label className='mb-1'>Title :</label>
                                  <br/><ErrorMessage name='title' component='span' className='text-danger'/>
                                  <Field autoComplete='off' name='title' type='text' className='form-control'  placeholder='Enter Title'/>
                              </div>
                              <div className='form-group my-2'>
                                  <label className='mb-1'>Post :</label>
                                  <br/><ErrorMessage name='postText' component='span' className='text-danger'/>
                                  <Field name='postText' type='text' className='form-control'  placeholder='Enter Post'/>
                              </div>
                              <div className='form-group my-2'>
                                  <label className='mb-1'>UserName :</label>
                                  <br/><ErrorMessage name='username' component='span' className='text-danger'/>
                                  <Field name='username' type='text' className='form-control'  placeholder='Enter UserName'/>
                              </div>
                              <div className='form-group my-3'>
                                  <button className='btn btn-primary form-control'  type='submit'>Submit</button>
                              </div>
                            </Form>
                            </Formik>
                        </div>
                        <div className='col-md-6 border-start'>
                            <h5 className='main-heading'>Address Information</h5>
                            <div className='underline'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Createpost
