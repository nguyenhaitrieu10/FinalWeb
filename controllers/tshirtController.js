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
	}).catch(error => res.status(404).send(error));
}

tshirtController.getList = function(callback, query){
	models.TShirt
	.findAll({limit: query.limit})
	.then(function(tshirts){
		tshirts.forEach(function(e){
			e.beforCost = ((e.dataValues.cost << 0) / (1 - e.dataValues.sellof / 100)) << 0;
		});
		callback(tshirts);
	}).catch(error => res.status(404).send(error));
}

tshirtController.getByID = function(callback, id){
	models.TShirt
	.findOne({
		where: {id: id}
	})
	.then(function(tshirt){
		tshirt.beforCost = ((tshirt.dataValues.cost << 0) / (1 - tshirt.dataValues.sellof / 100)) << 0;
		callback(tshirt);
	}).catch(error => res.status(404).send(error));
}

module.exports = tshirtController;