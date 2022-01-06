import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks: [
     { id:"1",
      title:"task number 1",
      description:"desc 1",
      deadline:"today",
      isDone:false,
  },
  { id:"2",
      title:"task number 2",
      description:"desc 2",
      deadline:"today",
      isDone:false,
  }
  ],
}

export const TaskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    
    ADDTASK: (state, action) => {
        state.tasks=[...state.tasks,action.payload.newTask];
      
    },
   ModifyTask: (state, action) => {
        let i = state.tasks.findIndex((e)=> e.id==action.payload.id)
        let copy = [...state.tasks]
        copy[i]={...copy[i],isDone: !copy[i].isDone};
        state.tasks=[...copy];
      
    },
    Delete: (state, action) => {
        state.tasks=state.tasks.filter((el)=>el.id != action.payload.id)
      
    },
  },
})

// Action creators are generated for each case reducer function
export const { ADDTASK , ModifyTask, Delete } = TaskSlice.actions

export default TaskSlice.reducer