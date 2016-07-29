let React = require('react');
let actives = require('actives');

let Connection = actives.Connection;
let Reflection = actives.Reflection;

module.exports = (state) => {
    return (Component) => {
        return class ActivesComponent extends React.Component {
            constructor(props, context) {
                super(props, context);
                this.state = Reflection.merge({}, state, props);

                this._actives_subscriber = (event, state) => {
                    this.setState(Reflection.merge({}, state, props));
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