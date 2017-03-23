import {ReduceStore} from 'flux/utils'
import actionNames from './../actions/ActionNames'
import AppDispatcher from './../dispatcher/AppDispatcher';
import update from 'react-addons-update';

class TaskStore extends ReduceStore {


    getInitialState (){
        return [];
    }

    reduce (state, action){
        switch(action.type){
            case actionNames.getTaskSuccess:
                return action.payload.response.tasks;
            case actionNames.addTaskSuccess :
                return update(this.getState(), {$push : action.payload});
            case actionNames.changeTaskStatusSuccess :
                return update(this.getState(), {[index]: {status : action.payload.status}})
            case actionNames.updateTaskSuccess :
                let index = this.getState().findIndex(item => item.id== action.payload.id);
                return update(this.getState(), {[index] : {$set : action.payload}});
            default : return state;
        }
    }
}

export default new TaskStore(AppDispatcher);