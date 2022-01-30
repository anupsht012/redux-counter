import {Nav} from "../components/partials/Nav";
import {TaskContainer} from "../containers/TaskContainer";
import {TASKS} from "../utils/mockData/tasks";

export const Landing = ()=>{
  const tasks = [...TASKS];

  const taskFilterHandler = (value) =>{
      return tasks.filter(v=> v.status===value);
  }
    return <main>
        <Nav/>
        <section className={'home'}>
            <div className="section-title">
               Tasks List
            </div>
            <div className="section-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis commodi consequuntur
                debitis doloremque explicabo facere facilis iusto, molestias,
            </div>
            <div className="task-content">
                <TaskContainer title={'Todo'} tasks={taskFilterHandler('todo')}/>
                <TaskContainer title={'In Progress'} tasks={taskFilterHandler('inProgress')}/>
                <TaskContainer title={'Review'} tasks={taskFilterHandler('review')}/>
                <TaskContainer title={'Completed'} tasks={taskFilterHandler('completed')}/>
            </div>
        </section>
    </main>
}