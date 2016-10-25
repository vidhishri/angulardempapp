//--load local--
var config = require('../config');
/**
 * Loads local config, if the external config file indicated exists, overwrites local config with external config.
 * @returns {*|exports}
 */
function loadConfig() {

    //--override with external if found--
    try {
        config = require(config.conf_external_path);
    } catch (err) {
        if (err.code === 'MODULE_NOT_FOUND') {
            console.warn('External config file not found, using default conf.js.');
        } else {
            throw err;
        }
    }

    return config;
}

module.exports = loadConfig();