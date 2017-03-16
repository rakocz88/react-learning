import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class TaskItem extends Component {

    render() {
        let value = this.props.value;

        return (
            <div>
                <ReactCSSTransitionGroup transitionName="task-element"
                                         transitionAppear={true}>

                        <div className="task-element task-element-action">
                            {value}
                        </div>

                </ReactCSSTransitionGroup>
            </div>

        )
    }
}
