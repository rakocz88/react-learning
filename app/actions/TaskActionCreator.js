import TaskApi from './../api/TaskApi'
import AppDispatcher from './../dispatcher/AppDispatcher';
import ActionNames from './ActionNames'

let TaskActionCreator = {
    addTask: (task) => {
        console.log("Action called with task");
        console.log(task);
        AppDispatcher.dispatch({type : ActionNames.addTask, payload : task});
    },
    updateTask: (task) => {
        AppDispatcher.dispatch({type : ActionNames.updateTask, payload : task});
    },
    updateTaskStatus: (id, status) => {
        AppDispatcher.dispatch({type : ActionNames.changeTaskStatusSuccess,  payload : {id: id, status : status}});
    },
    getTasks: () => {

        AppDispatcher.dispatchAsync(TaskApi.getTasks, {
            request: ActionNames.getTasks,
            success: ActionNames.getTaskSuccess,
            failure: ActionNames.getTasksFailure
        })
    },
    goToDetails : (task) => {
        AppDispatcher.dispatch({type : ActionNames.goToTaskDetails, payload : task})
    }


}
export default TaskActionCreator;