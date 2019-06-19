import React from "react";
import store from "./reducers"

export default class AllDoneTasks extends React.Component {
    doneTasks = []

    constructor() {
        super()

        store.subscribe(() => {
            this.doneTasks = store.getState().tasks.filter(task => task.done)
        })
    }

    render() {
        return (
            <ul className="done-tasks">
                {
                    this.doneTasks.map(task => <li key={task.id}>{task.value}</li>)
                }
            </ul>
        )
    }
}