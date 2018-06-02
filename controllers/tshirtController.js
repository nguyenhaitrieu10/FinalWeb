var tshirtController  = {};

var models = require('../models');

tshirtController.getAll = function(callback){
	models.TShirt
	.findAll()
	.then(function(tshirt){
		callback(tshirt);
	}).catch(error => res.status(404).send(error));
}

tshirtController.getLimit = function(callback, limit){
	models.TShirt
	.findAll({limit: limit})
	.then(function(tshirt){
		callback(tshirt);
	});
}

tshirtController.getList = function(callback, query){
	models.TShirt
	.findAll({limit: query.limit})
	.then(function(tshirt){
		callback(tshirt);
	});
}

// tshirtController.getById = function(id, callback){
// 	models.article
// 	.findOne({
// 		where: {id: id}
// 		// include: [models.comment]
// 	})
// 	.then(function(article){
// 		callback(article);
// 	});
// }

module.exports = tshirtController;