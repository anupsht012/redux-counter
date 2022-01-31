export const Task = (props) =>{
    return  <div className="task-card">
        <div className="close-icon" onClick={()=>props.remove(props.task.id)}><div className="material-icons">close</div></div>
        <div className="task-header">
            <div className="tag-chip"> {props.task.tag}</div>
        </div>
        <div className="task-title one-line">{props.task.title}</div>
        <div className="task-description two-lines">
            {props.task.description}
        </div>
    </div>;
}