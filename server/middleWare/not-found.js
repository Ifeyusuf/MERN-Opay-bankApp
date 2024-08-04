
const notFoundMiddleware = (req, res) => res.status(401).send( " Route does not found " );

module.exports = notFoundMiddleware