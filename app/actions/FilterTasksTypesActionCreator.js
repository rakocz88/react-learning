import ActionNames from './ActionNames';
import AppDispatcher from './../dispatcher/AppDispatcher';
import TypeApi from './../api/TypeApi';

let FilterTasksActionCreator = {
    getAllFilters: () => AppDispatcher.dispatchAsync(TypeApi.getTypes, {
        request: ActionNames.getTaskTypesFilters,
        success: ActionNames.getTaskTypesFiltersSuccess,
        failure: ActionNames.getTaskTypesFiltersFailure
    }),
    filterChange: (event, filterType)=> AppDispatcher.dispatch({
        type: ActionNames.getTaskTypesFilterChange,
        payload: {type: filterType}
    })
}

export default FilterTasksActionCreator