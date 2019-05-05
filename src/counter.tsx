export default function counter(state: any, action: any) {
    switch (action.type) {
        case 'UPDATE_ARRAY':
            let tasks = [...action.state.tasks]
            tasks[0].value = "prueba " + Math.round(Math.random() * 100)
            tasks.push({
                value: "prueba new",
                date: new Date("5/14/2019")
            })
            return {
                ...action.state,
                tasks: tasks
            }
        default:
            return action.state
    }
}