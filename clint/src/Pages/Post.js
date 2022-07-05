import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import {Card} from 'react-bootstrap';
import Axios from 'axios';

function Post() {

    let {id}=useParams();
    const [postObject,setPostObject]=useState({});
    
    useEffect(() => {
        Axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
            setPostObject(response.data);
        });
      });

  return (
    <div>
      <div className='container'>
        <div className='row'>
            <div className='col-md-4'>

                <h3>product</h3>
                <hr />
                <Card style={{ width: '18rem' }} className='my-3'>
                <Card.Body>
                    <Card.Title>{postObject.title}</Card.Title>
                    <Card.Text>
                    {postObject.postText}
                    </Card.Text>
                    <b>{postObject.username}</b>
                </Card.Body>
                </Card>

            </div>
            <div className='col-md-4'>
                
            </div>
            <div className='col-md-4'>
                <h3>Comment</h3>
                <hr />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Post