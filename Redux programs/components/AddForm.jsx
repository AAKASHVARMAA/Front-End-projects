import  {useState} from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../features/todo/todoslice"
export default function AddForm()
{

    let [task,setTask]=useState("")
    let dispatch=useDispatch()
    let handleSubmit=(evt)=>
    {
        evt.preventDefault()
        console.log(task)
        dispatch(addTodo(task))
        setTask("")
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input placeholder="Add the Task"  value={task}onChange={(e)=>setTask(e.target.value)}/>
            <button type="submit">Add Task</button>
        </form>
        </>
    )
}