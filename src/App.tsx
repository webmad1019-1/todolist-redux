import React from 'react';
import './App.scss';
import Task from './Task';
import store from "./reducers"

class App extends React.Component {
  store: any

  constructor(props: any) {
    super(props)

    store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  createNewTask() {
    store.dispatch({ state: this.state, type: 'GENERATE_FAKE_TASKS' })
  }

  disableAllTasks() {
    store.dispatch({ state: this.state, type: 'DISABLE_ALL_TASKS' })
  }

  enableAllTasks() {
    store.dispatch({ state: this.state, type: 'ENABLE_ALL_TASKS' })
  }

  render() {
    return (
      <div className="App">
        {
          store.getState().tasks.map(function (task: any, idx: number) {
            return <Task key={idx} {...task} />
          })
        }

        <div className="buttons">
          <button onClick={() => this.createNewTask()}>Create new</button>
          <button onClick={() => this.disableAllTasks()}>Disable all</button>
          <button onClick={() => this.enableAllTasks()}>Enable all</button>
        </div>
      </div>
    )
  }
}

export default App;
