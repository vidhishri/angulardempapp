module.exports = {
    // Production conf file path.
    conf_external_path: '/etc/node.conf/demomessage_service_app.js',
    // Log settings
    conf_log: {
        name: 'demo_message_service_log',
        console: true,
        log_file: __dirname + '/log.json'
    },

    // MongoDB settings.
    conf_mongoose: {
        host: 'localhost',
        port: 27017,
        db_name: 'demo_message'
    },
    // Server settings.
    conf_server: {
        name: 'Demo Message web service',
        version: '0.0.1',
        host: '127.0.0.1',
        port: 8000
    }
};