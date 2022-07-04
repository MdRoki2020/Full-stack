import Axios from 'axios';
import {useEffect, useState} from 'react';
import {Table} from 'react-bootstrap'

function Home() {

    const [listOfPosts,setListOfPosts]=useState([])

    useEffect(()=>{
        Axios.get('http://localhost:3001/posts').then((res)=>{
          setListOfPosts(res.data);
          console.log(res.data)
        })
      },[]);

  return (
    <div>
      <h2 className='text-center'>Dashboard</h2>
      <div className='container'>
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-8'>
        <h4>SHOW USER</h4>
        <hr/>
        <Table className='striped bordered hover'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Post Text</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>

          {
              listOfPosts.map((value)=>
              <tr key={value.id}>
                <td>{value.id}</td>
                <td>{value.title}</td>
                <td>{value.postText}</td>
                <td>{value.username}</td>
              </tr>
              )
            }

          </tbody>
        </Table>
        </div>
          <div className='col-sm-2'></div>
        </div>
      </div>
      
    </div>
  )
}

export default Home
