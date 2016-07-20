var connect = require('./test/actives-react').connect;
var actives = require('actives');

describe('x.spec.js', () => {
    it('A', () => {
        var box = actives.Box.create();
        box.add('connect', () => connect)
        
    })
});