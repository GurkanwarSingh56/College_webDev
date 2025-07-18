// Database configuration
const databaseConfig = {
    development: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        database: process.env.DB_NAME || 'myapp_dev',
        username: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD || '',
        dialect: 'postgres',
        logging: true
    },
    
    production: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT || 5432,
        database: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        dialect: 'postgres',
        logging: false,
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    
    test: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        database: process.env.DB_NAME || 'myapp_test',
        username: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD || '',
        dialect: 'postgres',
        logging: false
    }
};

module.exports = databaseConfig;
