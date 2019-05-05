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

    render() {
        return (
            <div className={`task task--${this.theClass} task--${this.props.done}`} onClick={() => this.switchDone()}>
                {this.props.value} (<Moment date={this.props.date} format="DD/MM/YYYY" />)
            </div>
        )
    }
}

export default Task;
