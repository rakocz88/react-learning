import {ReduceStore} from 'flux/utils';
import actionNames from './../actions/ActionNames'
import AppDispatcher from './../dispatcher/AppDispatcher';

class TypeStore extends ReduceStore {

    getInitialState (){
        return [];
    }

    reduce (state, action){
        switch (action.type){
            case actionNames.getTypes:
                return action.payload.response;
            default : return state ;
        }

    }
}
export default new TypeStore(AppDispatcher);