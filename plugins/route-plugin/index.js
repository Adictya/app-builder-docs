const path = require('path');
module.exports = function (context) {
    return {
        name: 'event-plugin',
        getClientModules() {
            return [path.resolve(__dirname, './event')];
        },
    }
}

