import {ReduceStore} from 'flux/utils'
import actionNames from './../actions/ActionNames'
import AppDispatcher from './../dispatcher/AppDispatcher';
import update from 'react-addons-update';

class TaskStore extends ReduceStore {


    getInitialState (){
        return [];
    }

    reduce (state, action){
        console.log("Task store action")
        switch(action.type){
            case actionNames.getTaskSuccess:
                return action.payload.response.tasks;
            case actionNames.addTaskSuccess :
                return update(this.getState(), {$push : action.payload});
            case actionNames.changeTaskStatusSuccess :
                console.log(action);
                let {id, status} = action.payload;
                let index = this.getState().findIndex(task => task.id == id);
                console.log("Something changed ");
                return update(this.getState(), {[index]: {$merge: {status: status}}});
            case actionNames.updateTaskSuccess :
                let index2 = this.getState().findIndex(item => item.id== action.payload.id);
                return update(this.getState(), {[index2] : {$set : action.payload}});
            default : return state;
        }
    }
}

export default new TaskStore(AppDispatcher);