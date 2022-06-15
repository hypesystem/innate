import { test } from 'tap';
import i from '../index.js';

test('it throws an exception if passed a non-object', function(t) {
    t.throws(() => i(123));
    t.end();
});

test('it allows plain values and objects to pass through', function(t) {
    const obj = {
        num: 3,
        str: "hello",
        sub: { foo: "bar" },
    };

    const innateObj = i(obj);

    t.equal(innateObj.num, 3);
    t.equal(innateObj.str, "hello");
    t.equal(innateObj.sub.foo, "bar");
    t.end();
});

test('it binds state on get', function(t) {
    const obj = {
        num: 3,
        inc: function() {
            this.num++;
            return this.num;
        }
    };

    const inc = i(obj).inc;

    t.equal(inc(), 4);
    t.equal(inc(), 5);
    t.equal(inc(), 6);
    t.equal(obj.num, 6);
    t.end();
});

test('leaves already bound functions alone', function(t) {
    const state = { num: 3 };
    const obj = {
        inc: function() {
            this.num++;
            return this.num;
        }.bind(state),
    };

    const inc = i(obj).inc;

    t.equal(inc(), 4);
    t.equal(inc(), 5);
    t.equal(inc(), 6);
    t.equal(state.num, 6);
    t.end();
});
