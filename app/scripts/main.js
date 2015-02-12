console.log('The Iron Yard Rocks');

var Item = Backbone.Model.extend({

		initialize: function(){

			console.log('New Item created');
			console.log(this);
		},

		idAttribute: '_id',

		defaults: {
			name: '',
			status: 'incomplete'
		
		}

});

var ItemCol = Backbone.Collection.extend({

	initialize: function () {
		console.log('Item collection Created');
		console.log(this);
	},

	model: Item,



	url: 'http://tiy-atl-fe-server.herokuapp.com/collections/backboneMark',


});

var allItems = new ItemCol();

var a = new Item ({name: 'Milk'});
var b = new Item ({name: 'Eggs'});
var c = new Item ({name: 'Bread'});
