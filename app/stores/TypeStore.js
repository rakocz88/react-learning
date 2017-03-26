import {ReduceStore} from 'flux/utils';
import actionNames from './../actions/ActionNames'
import AppDispatcher from './../dispatcher/AppDispatcher';

class TypeStore extends ReduceStore {

    getInitialState (){
        return [];
    }

    reduce (state, action){
        switch (action.type){
            case actionNames.getTypesSuccess:
                return action.payload.response.types;
            default : return state ;
        }

    }
}
export default new TypeStore(AppDispatcher);