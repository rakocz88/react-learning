import 'whatwg-fetch';
import 'babel-polyfill'

let TaskApi = {
    getTasks : fetch('./data/tasks.json').then(data => data.json())

}

export default TaskApi;