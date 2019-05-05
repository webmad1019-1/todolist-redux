import React from 'react';
import './App.scss';
import Task from './Task';
import { createStore } from 'redux'

interface Test {
  tasks: Array<TaskDataModel>
}

interface TaskDataModel {
  value: string,
  date: Date
}

class App extends React.Component {
  store: any;
  state: Test = { tasks: [] }

  constructor(props: any) {
    super(props)

    var that = this

    this.state = {
      tasks: [...Array(4)].map(() => ({
        value: "prueba " + Math.round(Math.random() * 100),
        date: new Date("5/" + (Math.round(Math.random() * 20) + 1) + "/2019")
      }))
    }

    function counter(state: any = that.state, action: any) {
      switch (action.type) {
        case 'UPDATE_ARRAY':
          let tasks = [...state.tasks]
          tasks[0].value = "prueba 69"
          tasks.push({
            value: "prueba new",
            date: new Date("5/14/2019")
          })
          return {
            ...state,
            tasks: tasks
          }
        default:
          return state
      }
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
            return <Task key={idx} val={task} />
          })
        }

        <button onClick={() => this.test()}>Update state</button>
      </div>
    )
  }
}

export default App;
