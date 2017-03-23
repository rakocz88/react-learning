import TypeApi from './../api/TypeApi'
import AppDispatcher from './../dispatcher/AppDispatcher';
import ActionNames from './ActionNames'

let TypeActionCreator = {
    getTypes: AppDispatcher.dispatchAsync({
        request: ActionNames.getTypes,
        success: ActionNames.getTypesSuccess,
        failure: ActionNames.getTypesFailure
    })

}
export default TypeActionCreator;