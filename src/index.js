let React = require('react');
let Connection = require('actives').Connection;

module.exports = (state) => {
    return (Component) => {
        return class ActivesComponent extends React.Component {
            constructor(props, context) {
                super(props, context);
                this.state = state;

                this._actives_subscriber = (event, state) => {
                    this.setState(state);
                };
            }

            componentDidMount() {
                Connection.subscribe(state, this._actives_subscriber);
            }

            componentWillUnmount() {
                Connection.unsubscribe(state, this._actives_subscriber);
            }

            render() {
                return React.createElement(Component, this.state);
            }
        }
    };
};