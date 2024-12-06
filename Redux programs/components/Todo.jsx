import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { deleteTodo } from "../features/todo/todoslice"
import AddForm from './AddForm'
export default function Todo()
{
   const todos= useSelector((state)=>state.todos)
   const disatch=useDispatch()
   console.log(todos)
   const deleteHandler=(id)=>
   {
    console.log("deleted",id)
    disatch(deleteTodo(id))

   }
    return(
        <div>
            <AddForm/>
            <h2>Todo List</h2>
            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}>{todo.task}
                    <button onClick={()=>deleteHandler(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}