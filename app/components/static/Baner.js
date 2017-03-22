import React, {Component} from 'react';


class Baner extends Component {
    constructor() {
        super();
    }


    render() {
        return (
            <div className = "baner">
               <img src='./img/bower-logo.png' className="logo-small" />
            </div>
        )
    }

}

export default Baner;