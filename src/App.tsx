import React from 'react';
import './App.scss';
import Task from './Task';
import counter from "./counter"
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

  render() {
    return (
      <div className="App">
        {
          store.getState().tasks.map(function (task: any, idx: number) {
            return <Task key={idx} {...task} />
          })
        }

        <button onClick={() => this.test()}>Update state</button>
      </div>
    )
  }
}

export default App;
