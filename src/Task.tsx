import React from 'react';
import './Task.scss';
import Moment from 'react-moment';

interface TaskDataModel {
    value: string,
    date: Date
}

interface MakeCounterProps {
    className?: string,
    val: TaskDataModel
  }

class Task extends React.Component<MakeCounterProps> {
    theClass: string;

    state = {
        done: false
    }

    constructor(props: MakeCounterProps) {
        super(props)

        this.theClass = this.props.className || "normal";
    }

    switchDone() {
        this.setState({
            done: !this.state.done
        })
    }

    render() {
        return (
            <div className={`task task--${this.theClass} task--${this.state.done}`} onClick={() => this.switchDone()}>
                {this.props.val.value} (<Moment date={this.props.val.date} format="DD/MM/YYYY" />)
            </div>
        )
    }
}

export default Task;
