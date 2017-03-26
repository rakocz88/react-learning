import {ReduceStore} from 'flux/utils';
import actionNames from './../actions/ActionNames';
import TaskStore from './TaskStore';
import AppDispatcher from './../dispatcher/AppDispatcher';

class TaskDetailsStore extends ReduceStore {

    getInitialState() {
        return {}
    }

    reduce(state, action) {
        this.getDispatcher().waitFor([TaskStore.getDispatchToken()])
        switch (action.type) {

            case actionNames.goToTaskDetails :
                let tasks = TaskStore.getState();
                let index = tasks.findIndex(task => task.id == action.payload);
                return tasks[index];
            default :
                return state;
        }
    }

}

export default new TaskDetailsStore(AppDispatcher);