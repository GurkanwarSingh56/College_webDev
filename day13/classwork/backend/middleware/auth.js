// Basic authentication middleware
const auth = (req, res, next) => {
    console.log('Auth middleware called');
    
    // Basic auth check (just for demo)
    const token = req.headers.authorization;
    
    if (!token) {
        return res.status(401).json({
            message: 'No token provided'
        });
    }
    
    // In real app, verify the token here
    console.log('Token:', token);
    next();
};

module.exports = auth;
