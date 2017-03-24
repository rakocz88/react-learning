import {ReduceStore} from 'flux/utils';
import actionNames from './../actions/ActionNames'
import AppDispatcher from './../dispatcher/AppDispatcher';
import update from 'react-addons-update';
import 'babel-polyfill';

class TaskTypeFilterStore extends ReduceStore {

    getInitialState (){
        return [];
    }

    reduce (state, action){
        switch (action.type){
            case actionNames.getTaskTypesFiltersSuccess :
                let elems = action.payload.response.types;
                elems.map(element => element.active= false);

                return elems;
            case actionNames.getTaskTypesFilterChange:
                let filterIndex = this.getState().findIndex(filter => filter.type ==action.payload.type);
                if (filterIndex == -1){
                    return state;
                }
                let active = this.getState()[filterIndex].active;
                return  update(this.getState(), {[filterIndex] : {$merge : {active : !active}}})
                return state
            default:
                return state
        }
    }
}

export default new TaskTypeFilterStore(AppDispatcher);