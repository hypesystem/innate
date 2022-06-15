export default (o) => new Proxy(o, {
    get(target, prop, receiver) {
        const val = target[prop];
        if(typeof val === 'function') {
            return val.bind(target);
        }
        return val;
    },
});
