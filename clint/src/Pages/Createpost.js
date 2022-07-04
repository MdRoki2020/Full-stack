import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'

function Createpost() {
  return (
    <div className='createPostPage'>
      <div className='container'>
            <div className='card shadow'>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h6>Contact Form</h6>
                            <hr />
                            <Formik>
                            <Form >
                              <div className='form-group'>
                                  <label className='mb-1'>Title</label>
                                  <input type='text' className='form-control'  placeholder='Enter Title'/>
                              </div>
                              <div className='form-group my-2'>
                                  <label className='mb-1'>Post</label>
                                  <input type='text' className='form-control'  placeholder='Enter Post'/>
                              </div>
                              <div className='form-group my-2'>
                                  <label className='mb-1'>UserName</label>
                                  <input type='text' className='form-control'  placeholder='Enter UserName'/>
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
