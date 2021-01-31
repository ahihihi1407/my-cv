import React, { Component } from 'react';

class Side extends Component {
    render() {
        return (
            <div className="side">
                {this.props.children}
            </div>
        );
    }
}

export default Side;