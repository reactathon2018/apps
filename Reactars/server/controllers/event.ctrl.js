/** */
const Events = require('./../models/Events')
const User = require('./../models/User')


module.exports = {
   
    /**
     * article_id
     */
    getAllEvent: (req, res, next) => {
        console.log('getAllEvent',req.params.id)
        Events.find("5b3b6d5d03bf0d0e1072e0bd")
        .populate('participant').exec((err, event)=> {
            if (err)
                res.send(err)
            else if (!event)
                res.send(404)
            else
                res.send(event)
            next()            
        })
    },
    getEvent: (req, res, next) => {
        Events.findById(req.params.id).then
        ((_user) => {
            
                return res.json({ user: _user })
            
        }).catch((err)=>console.log(err))
    }
}