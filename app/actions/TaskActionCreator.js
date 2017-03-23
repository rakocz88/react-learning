import TaskApi from './../api/TaskApi'
import AppDispatcher from './../dispatcher/AppDispatcher';
import ActionNames from './ActionNames'

let TaskActionCreator = {
    addTask: (task) => {
        AppDispatcher.dispatch({type : ActionNames.addTask, payload : task});
    },
    updateTask: (task) => {
        AppDispatcher.dispatch({type : ActionNames.updateTask, payload : task});
    },
    changeTaskStatus: (task) => {
        AppDispatcher.dispatch({type : ActionNames.updateTaskStatus, payload : task});
    },
    getTasks: () => {
        console.log("GEt tasks");
        AppDispatcher.dispatchAsync(TaskApi.getTasks, {
            request: ActionNames.getTasks,
            success: ActionNames.getTaskSuccess,
            failure: ActionNames.getTasksFailure
        })
    }


}
export default TaskActionCreator;