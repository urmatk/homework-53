import React from 'react';

interface IAddTaskFormProps extends React.PropsWithChildren {
    currentTasks: React.ChangeEventHandler<HTMLInputElement>;
    onAddClick: React.MouseEventHandler;

}
const AddTaskForm: React.FC<IAddTaskFormProps> = props => {
    return (
        <div className="addText">
            <input type="text" onChange={props.currentTasks} />
            <button className="btn" onClick={props.onAddClick}>Add</button>
        </div>
    );
};

export default AddTaskForm;