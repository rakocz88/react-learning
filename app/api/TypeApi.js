import 'whatwg-fetch';
import 'babel-polyfill'

let TypeApi = {
    getTypes : fetch('./data/taskTypes.json').then(data => data.json())
}

export default TypeApi;