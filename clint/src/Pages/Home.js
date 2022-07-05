import React from 'react';
import Axios from 'axios';
import {useEffect, useState} from 'react';
import { Card} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

function Home() {

    const [listOfPosts,setListOfPosts]=useState([])

    let navigate = useNavigate ();

    useEffect(()=>{
        Axios.get("http://localhost:3001/posts").then((res)=>{
          setListOfPosts(res.data);
        })
      },[]);

  return (
    <div>
      <h2 className='text-center my-3'>Dashboard</h2>
      <div className='container'>
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-8'>
        <h4>SHOW USER</h4>
        <hr/>

        {
            listOfPosts.map((value)=>
          
            <Card style={{ width: '18rem' }} className='mb-3'>
              <Card.Body onClick={() => {navigate(`/post/${value.id}`);}}>
                <Card.Title>{value.title}</Card.Title>
                <Card.Text>
                  {value.postText}
                </Card.Text>
                <b>{value.username}</b>
              </Card.Body>
            </Card>

            )
        }

        </div>
          <div className='col-sm-2'></div>
        </div>
      </div>
      
    </div>
  )
}

export default Home
