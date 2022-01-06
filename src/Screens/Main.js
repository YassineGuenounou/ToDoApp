import { Alert, Button } from 'react-bootstrap'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Delete, ModifyTask } from '../Slices/TaskSlice';

const Main = () => {
    const dispatch = useDispatch();
    const handleEdit=({id})=>{
        dispatch(ModifyTask({id}))

    }
    const handleDelete=({id})=>{
        dispatch(Delete({id}))

    }
    
    const data = useSelector(state => state.tasks.tasks)
    return (
        <div>
            {data.map((task)=>
            <Alert variant={task.isDone?"success":"danger"}>
                <div style={{display:"flex",justifyContent:"space-between"}}>
               
                <div style={{display:"block"}}>
                    <h5>{task.title}
                </h5>
                <p>{task.description}</p>
                <p>{"Deadline : "+task.deadline}</p>
                </div> 
                <div>

                
                <Button variant={task.isDone?"danger":"success"} onClick={()=>handleEdit({id:task.id})}>✔</Button>
                <Button variant="warning" onClick={()=>handleDelete({id:task.id})}>⌦</Button>
                </div>
                </div>
                
            </Alert>)}
            
        </div>
    )
}

export default Main
