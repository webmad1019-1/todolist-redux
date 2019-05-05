import React from 'react';
import './App.scss';
import Task from './Task';

class App extends React.Component {
  state = {
    tasks: [
      {
        value: "prueba",
        date: new Date("5/5/2019")
      },
      {
        value: "prueba 2",
        date: new Date("5/4/2019")
      }
    ]
  }

  render() {
    return (
      <div className="App">
        {
          this.state.tasks.map((task, idx) => <Task key={idx} val={task} />)
        }
      </div>
    )
  }
}

export default App;
