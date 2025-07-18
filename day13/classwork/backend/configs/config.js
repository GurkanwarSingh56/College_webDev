// Basic configuration file
const config = {
    port: 3000,
    host: 'localhost',
    
    // Basic database settings
    database: {
        name: 'myapp',
        host: 'localhost',
        port: 5432
    },
    
    // Basic app settings
    app: {
        name: 'My App',
        version: '1.0.0'
    }
};

module.exports = config;
