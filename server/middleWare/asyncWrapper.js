

const asyncWrapper = (fin) => {
    return async (req, res, next) =>{
        try {
            await fin(req, res, next)
        } catch (error) {
            await next(error)
        }
    }
}

module.exports = asyncWrapper