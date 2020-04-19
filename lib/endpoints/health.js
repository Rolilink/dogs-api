const healthEndpoint = (req, res) => {
    res.status(200).json({
        status: 'ok',
    });
};

module.exports = healthEndpoint;
