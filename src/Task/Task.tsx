import React from 'react';

interface IAddTaskProps extends React.PropsWithChildren {
    text: string;
    key: string;
    onRemoveTask: React.MouseEventHandler;
}
const Task: React.FC<IAddTaskProps> = props => {
    return (
        <div className="blok-Task">
            <div className="Task">
                <div><p>{props.text}</p></div>
                <div><button onClick={props.onRemoveTask}>delete</button></div>
            </div>
        </div>

    );
};

export default Task;