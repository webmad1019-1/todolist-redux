import React from 'react';
import './Task.scss';
import Moment from 'react-moment';
import TaskDataModel from './TaskDataModel';
import store from "./counter"

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

        store.subscribe(() => {
            this.setState(store.getState())
        })
    }

    switchDone() {
        store.dispatch({ type: 'UPDATE_ONE', id: this.props.id })
    }

    remove() {
        store.dispatch({ type: 'REMOVE_ONE', id: this.props.id })
    }

    componentWillUnmount() {
        // this
        // debugger
    }

    render() {
        return (
            <div className={`task task--${this.theClass} task--${this.props.done}`}>
                {this.props.value} (<Moment date={this.props.date} format="DD/MM/YYYY" />)
                <button onClick={() => this.remove()}>Remove</button>
                <button onClick={() => this.switchDone()}>Update</button>
            </div>
        )
    }
}

export default Task;
