import Login from "../views/login";
import Task from "../views/task";
export default [
  {
    path:'/',
    element:<Login/>
  },
  {
    path:'/task',
    element:<Task/>
  }
]
