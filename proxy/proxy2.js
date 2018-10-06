const Measured = require('measured');
const timer = new Measured.Timer();
const chalk = require('chalk');
const logUpdate = require('log-update');
const asciichart = require('asciichart');
const history = new Array(120).fill(0);

const monitor = obj => {
    return new Proxy(obj, {
        get(target, propKey) {
            const origMethod = target[propKey];
            if(!origMethod) return;
            return (...args) => {
                const stopwatch = timer.start();
                const result = origMethod.apply(this, args);
                return result.then(out => {
                    const n = stopwatch.end();
                    history.shift();
                    history.push(n);
                    return out;
                })
            }
        }
    })
};

const service = {
    callService() {
        return new Promise(resolve =>
            setTimeout(resolve, Math.random() * 50 + 50));
    }
};

const monitoredService = monitor(service);

setInterval(async () => {
    try {
        await monitoredService.callService();

        const fields = ['min', 'max', 'sum', 'variance', 'mean', 'count', 'median']
        const histogram = timer.toJSON().histogram;
        const lines = [
            '',
            ...fields.map(field => chalk.cyan(field) + ': ' + (histogram[field] || 0).toFixed(2))
    ]
        logUpdate(asciichart.plot(history, { height: 10 }) + lines.join('\n'));
    } catch (err) {
        console.log(err);
    }
}, 100);