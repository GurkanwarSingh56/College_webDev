// Basic home controller
const homeController = {
    // Home page
    home: (req, res) => {
        res.json({
            message: 'Welcome to the API',
            status: 'OK'
        });
    },

    // Health check
    health: (req, res) => {
        res.json({
            message: 'Server is running',
            timestamp: new Date().toISOString()
        });
    }
};

module.exports = homeController;
