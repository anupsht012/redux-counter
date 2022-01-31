import {Nav} from "../components/partials/Nav";
import {TaskContainer} from "../containers/TaskContainer";
import {TASKS} from "../utils/mockData/tasks";
import {Dialog} from "../components/common/Dialog";
import {AddTask} from "../components/AddTask";
import {useState} from "react";

export const Landing = ()=>{
  const [tasks,setTasks] = useState([...TASKS]);
  const [isAppear, setIsAppear] = useState(false);
  const taskFilterHandler = (value) =>{
      return tasks.filter(v=> v.status===value);
  }

  const toggleAppear= ()=>{
     setIsAppear(!isAppear);
  }

  const addTask = (task)=>{
      setTasks([...tasks,task]);
      toggleAppear();
  }

  const deleteTask = (id) => {
      const tempTasks = tasks.filter(v=> v.id !==id);
      setTasks([...tempTasks]);
  }
    return <>
        <main>
            <Nav/>
            <section className={'home'}>
                <div className="title-area">
                    <div className="section-title">
                        Tasks List
                    </div>
                    <div>
                        <button className="btn primary" onClick={toggleAppear}>Add Task</button>
                    </div>
                </div>
                <div className="section-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis commodi consequuntur
                    debitis doloremque explicabo facere facilis iusto, molestias,
                </div>
                <div className="task-content">
                    <TaskContainer title={'Todo'} tasks={taskFilterHandler('todo')} deleteTask={deleteTask}/>
                    <TaskContainer title={'In Progress'} tasks={taskFilterHandler('inProgress')} deleteTask={deleteTask}/>
                    <TaskContainer title={'Review'} tasks={taskFilterHandler('review')} deleteTask={deleteTask}/>
                    <TaskContainer title={'Completed'} tasks={taskFilterHandler('completed')} deleteTask={deleteTask}/>
                </div>
            </section>
        </main>
        {isAppear &&  <Dialog closeDialog={toggleAppear}>
            <AddTask closeDialog={toggleAppear} addTask={addTask}/>
        </Dialog>}
    </>
}