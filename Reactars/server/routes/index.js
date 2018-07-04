const user = require('./user')
const article = require('./article')
const event = require('./event')
module.exports = (router) => {
    user(router)
    article(router)
    event(router)

}