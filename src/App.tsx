import React from 'react';
import './App.scss';
import Task from './Task';
import TaskDataModel from './TaskDataModel';
import store from "./counter"

interface Test {
  tasks: Array<TaskDataModel>
}

class App extends React.Component {
  store: any

  constructor(props: any) {
    super(props)

    store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  test() {
    store.dispatch({ state: this.state, type: 'UPDATE_ARRAY' })
  }

  disableAll() {
    store.dispatch({ state: this.state, type: 'DISABLE_ALL' })
  }

  enableAll() {
    store.dispatch({ state: this.state, type: 'ENABLE_ALL' })
  }

  render() {
    return (
      <div className="App">
        {
          store.getState().tasks.map(function (task: any, idx: number) {
            return <Task key={idx} {...task} />
          })
        }

        <button onClick={() => this.test()}>Create new</button>
        <button onClick={() => this.disableAll()}>Disable all</button>
        <button onClick={() => this.enableAll()}>Enable all</button>
      </div>
    )
  }
}

export default App;
