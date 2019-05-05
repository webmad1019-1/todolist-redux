import React from 'react';
import './App.scss';
import Task from './Task';
import { createStore } from 'redux'
import counter from "./counter"
import TaskDataModel from './TaskDataModel';

interface Test {
  tasks: Array<TaskDataModel>
}

class App extends React.Component {
  store: any;
  state: any = { tasks: [] }

  constructor(props: any) {
    super(props)

    var that = this

    this.state = {
      tasks: [...Array(5)].map(() => ({
        value: "prueba " + Math.round(Math.random() * 100),
        date: new Date("5/" + (Math.round(Math.random() * 20) + 1) + "/2019"),
        done: false
      } as TaskDataModel))
    }

    this.store = createStore(counter)

    this.store.subscribe(() => {
      this.setState(this.store.getState())
    })
  }

  test() {
    this.store.dispatch({ state: this.state, type: 'UPDATE_ARRAY' })
  }

  render() {
    return (
      <div className="App">
        {
          this.state.tasks.map(function (task: any, idx: number) {
            return <Task key={idx} {...task} />
          })
        }

        <button onClick={() => this.test()}>Update state</button>
      </div>
    )
  }
}

export default App;
