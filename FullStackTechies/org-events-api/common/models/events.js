'use strict';

// module.exports = function(Events) {
//  Events.getDataSource().connector.connect(function(err, db) {
//   var collection = db.collection('events');
//   var author = Book.getDataSource().ObjectID(authorId);
//   collection.aggregate( [
//                 {"$group": { "_id": { eventId: "$eventId" } } }
//             ],
//    function(err, data) {
//     if (err) return callback(err);
//     return callback(null, data);
//   });
// });
// };

module.exports = function(Events) {	
	/*Events.getDataSource().connector.connect(function(err, db) {
  var collection = db.collection('events');
  //var author = Book.getDataSource().ObjectID(eventId);
  collection.aggregate(
  	[
    { 
    	$match: { 
    		eventId: 0 
    	}
    }
  ], 
  function(err, data) {
    if (err) return callback(err);
    console.log(data);
    return callback(null, data);
  });
});*/

	 Events.greet = function(msg, cb) {

	 	Events.getDataSource().mongodb(function(err, db) {
  var collection = db.collection('events');
  //var author = Book.getDataSource().ObjectID(eventId);
  collection.aggregate(
  	[
    { 
    	$match: { 
    		eventId: 0 
    	}
    }
  ], 
  function(err, data) {
    if (err) return callback(err);
    console.log(data);
    return callback(null, data);
  });
});

	 	//let EventsCollection =Events.getDataSource().connector.collection(Events.modelName );
		//var result = EventsCollection.db.find();
		/*var result = Events.aggregate([
	{
		$match: {
			$or: [
			{
			regStart: {
				$gte: new Date("2018-06-21").toISOString(), 
				$lte: new Date("2018-07-20").toISOString()
			}
			},
			{
			eventEnd: {
				$gte: new Date("2018-06-21").toISOString(), 
				$lte: new Date("2018-07-20").toISOString()
			}
			}]
		}
	}
]);
		console.log(result);*/

			//return result;
    }

    Events.remoteMethod('greet', {      
    	  http: {
         	path: "/getMatchingEvents",  
        	verb: "GET"
      	},
          returns: {arg: 'result', type: 'object'}
    });



Events.groupBy = function( cb ) {
    let EventsCollection =Events.getDataSource().connector.collection(Events.modelName );
    // OPTIONAL if ( ! filter.where ) return cb( new Error( 'missing a where clause in the filter' ) );



   // if ( ! filter.groupBy ) return cb( new Error( 'missing a groupBy clause in the filter' ) );
    let pipeline = [];
    	pipeline.push({ $match: {
			$or: [
			{
			regStart: {
				$gte: new Date("2018-06-21"), 
				$lte: new Date("2018-07-20")
			}
			},
			{
			eventEnd: {
				$gte: new Date("2018-06-21"), 
				$lte: new Date("2018-07-20")
			}
			}]
		}
	});
    

   

   EventsCollection.aggregate( pipeline, cb);
  }

 Events.remoteMethod('groupBy', {
    isStatic: true,
    description: 'Invoke a group by',
    accessType: 'WRITE',    
    returns: {arg:'data', type:['object'], root:true}
  });
}