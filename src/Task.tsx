import React from 'react';
import './Task.scss';
import Moment from 'react-moment';
import TaskDataModel from './TaskDataModel';
import store from "./reducers"

interface MakeCounterProps extends TaskDataModel {
    className?: string,
    key: Number
}

class Task extends React.Component<MakeCounterProps> {
    store: any;
    theClass: string;

    state = {
        done: false
    }

    constructor(props: MakeCounterProps) {
        super(props)

        this.theClass = this.props.className || "normal";

        // store.subscribe(() => {
            
        //     this.setState(store.getState(), () => {
        //         console.log(this.state)
        //     })
        // })
    }

    switchTaskIsDone() {
        store.dispatch({ type: 'UPDATE_ONE_TASK', id: this.props.id })
    }

    removeThisTask() {
        store.dispatch({ type: 'REMOVE_ONE_TASK', id: this.props.id })
    }

    render() {
        return (
            <div className={`task task--${this.theClass} task--${this.props.done}`}>
                <div className="task-data">
                    {this.props.value} (<Moment date={this.props.date} format="DD/MM/YYYY" />)
                </div>
                <div className="buttons">
                    <button onClick={() => this.removeThisTask()} disabled={this.props.done ? true : false}>Remove</button>
                    <button onClick={() => this.switchTaskIsDone()} disabled={this.props.done ? true : false}>Mark as done</button>
                </div>
            </div>
        )
    }
}

export default Task;
