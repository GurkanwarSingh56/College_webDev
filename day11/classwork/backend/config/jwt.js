// JWT configuration
const jwtConfig = {
    secret: process.env.JWT_SECRET || 'your-jwt-secret-key',
    expiresIn: process.env.JWT_EXPIRES_IN || '24h',
    refreshTokenExpiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN || '7d',
    
    // JWT options
    options: {
        issuer: process.env.JWT_ISSUER || 'myapp',
        audience: process.env.JWT_AUDIENCE || 'myapp-users',
        algorithm: 'HS256'
    }
};

module.exports = jwtConfig;
