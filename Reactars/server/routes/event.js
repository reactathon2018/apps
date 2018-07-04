const eventcontroller = require('./../controllers/event.ctrl')


module.exports = (router) => {

    /**
     * get all articles
     */
    router
        .route('/events')
        .get(eventcontroller.getAllEvent)

    
}