let React = require('react');
let actives = require('actives');

let Connection = actives.Connection;
let Reflection = actives.Reflection;

module.exports = (...args) => {
    let state;
    let component;

    args.forEach((arg) => {
        if (Connection.isStateObject(arg)) {
            state = arg;
        } else {
            component = arg;
        }
    });

    if (!state) {
        throw Error('State is not defined');
    }

    let connect = (Component) => {
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

    return component ? connect(component) : connect;
};