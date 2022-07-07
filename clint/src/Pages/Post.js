import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import {Card,Table} from 'react-bootstrap';
import Axios from 'axios';

function Post() {

    let {id}=useParams();
    const [postObject,setPostObject]=useState({});

    const [comments,setComments]=useState([])

    const [newComment,setNewComment]=useState("");
    
    useEffect(() => {
        Axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
            setPostObject(response.data);
        });

        //for comments
        Axios.get(`http://localhost:3001/comments/${id}`).then((response) => {
          setComments(response.data);
        });


      },[]);

      const addComment=()=>{Axios.post('http://localhost:3001/comments',
      {
        commentBody:newComment,
         PostId:id
        },
        {
          headers:{
            accessToken:localStorage.getItem("accessToken"),
          },
        }
        )
         .then((res)=>{
          if(res.data.error){
            console.log(res.data.err)
          }else{
          const commentToAdd={commentBody:newComment,username:res.data.username};
          setComments([...comments,commentToAdd]);
          setNewComment('');
          }
        })
      }

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
                <h3>Comments</h3>
                <hr />

                <div className=''>
                <input onChange={(e)=>{setNewComment(e.target.value)}} value={newComment} autoComplete='off' type='text' className='form-control'  placeholder='Your Comment'/>
                <button onClick={addComment} type='submit' className='my-2 btn btn-primary'>Add comment</button>
                </div>

                <div className='showComment'>
                <Table className='striped bordered hover'>
          <thead>
            <tr>
              <th>Comment</th>
            </tr>
          </thead>
          <tbody>

          {
              comments.map((value)=>
              <tr key={value.id}>
                
                <td><b>{value.username}</b> :     {value.commentBody}</td>
              </tr>
              )
            }

          </tbody>
        </Table>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Post
