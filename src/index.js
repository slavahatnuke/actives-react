let React = require('react');
let Connection = require('actives').Connection;
let Reflection = require('actives').Reflection;

module.exports = (state) => {
    return (Component) => {
        return class ActivesComponent extends React.Component {
            constructor(props, context) {
                super(props, context);
                this.state = state;

                Reflection.merge(this.state, props);

                this._actives_subscriber = (event, state) => {
                    Reflection.merge(state, props);
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