import { createStore } from 'redux'
import TaskDataModel from './TaskDataModel';

const initialState = {
    tasks: [...Array(5)].map((x, idx) => ({
        value: "prueba " + Math.round(Math.random() * 100),
        date: new Date("5/" + (Math.round(Math.random() * 20) + 1) + "/2019"),
        done: false,
        id: idx
    } as TaskDataModel))
}

const store = createStore((state: any = initialState, action: any) => {
    var tasks;

    switch (action.type) {
        case 'UPDATE_ARRAY':
            tasks = [...state.tasks]
            tasks.push({
                id: Math.round(Math.random() * 10000),
                value: "prueba new",
                date: new Date("5/14/2019"),
                done: false
            } as TaskDataModel)
            return {
                ...state,
                tasks: tasks
            }
        case 'UPDATE_ONE':
            tasks = [...state.tasks]
            let taskIndex = tasks.findIndex((el) => el.id === action.id)
            tasks[taskIndex] = {
                ...tasks[taskIndex],
                done: !tasks[taskIndex].done
            }

            return {
                ...state,
                tasks: [...tasks]
            }

        default:
            return state
    }
},
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__())

export default store;