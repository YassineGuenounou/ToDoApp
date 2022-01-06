import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { useNavigate, useNavigationType } from 'react-router';
import { ADDTASK } from '../Slices/TaskSlice';

const Admin = () => {
    const navigate=useNavigate()
    var ID = function () {
       
        return Math.random().toString(36).substr(2, 9);
      };
    const [newTask, setNewTask] = useState({
        id:ID(),
        title:"",
        description:"",
        deadline:"",
        isDone:false
    })
    const dispatch = useDispatch()
    const handleAdd=()=>{
        dispatch(ADDTASK({newTask:newTask}))
        setTimeout(() => {navigate("/");
            
        }, 200);
    };
    return (
        <Container>
       <Form style={{marginTop:"100px"}}>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" placeholder="Title" 
    onChange={(e)=>setNewTask({...newTask,title:e.target.value})}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" rows={3} onChange={(e)=>setNewTask({...newTask,description:e.target.value})}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Deadline</Form.Label>
    <Form.Control type='text' placeholder="Deadline" onChange={(e)=>setNewTask({...newTask,deadline:e.target.value})}/>
  </Form.Group>
  
</Form>
<Button variant='info' size='lg' style={{width:"200px",margin:"0 40%"}} onClick={()=>handleAdd()}>Add Task</Button>
             </Container>
  
    )
}

export default Admin
