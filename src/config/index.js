if(__DEV__) {
    module.exports = require('./endpoints.dev');
} else {
    module.exports = require('./endpoints.prod');
}