const errorMiddlware = (error, _req, res, _next) => {
    const { status, message } = error;

    if (status) {
        return res.status(status).json({ message });
    }
    return res.status(500).json({ message: 'Internal server error' });
};

module.exports = errorMiddlware;