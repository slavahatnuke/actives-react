import React from 'react'

export default class TimerView extends React.Component {
    render() {
        return <div>Timer #1: {this.props.name} {this.props.time} {this.props.children}
            <button onClick={this.props.onUp}>up</button>
            <button onClick={this.props.onDown}>down</button>
        </div>;
    }
}

