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


var itemCol = new ItemCol();
////////////////////////////////////
//////////////////////////////////////
//get text from field when button in form clicked.
$('#itemForm').on('submit', function(e){
	e.preventDefault();
	console.log('click');

	var itemName = document.getElementById('text').value;
    console.log('gettext');
    console.log(itemName);
    // Create a new Todo
    var itemInstance = new Item({name: itemName});

    itemCol.add(itemInstance);

    // Clear the form
    //taskname.reset();
    $("#itemForm")[0].reset();
});












///////////////////////////////////
///////////////////////////////////
//_.template code
var todoTemplate = $('#todoTemp').html();
var todoTemplateFunc = _.template(todoTemplate);

 addItem = function (item) {
      	console.log(item);
   // todoArray.push(item);
    $('#addItemHere').prepend(todoTemplateFunc(item));
  };
//////////////////////////////////////
////////////////////////////////////////////
// var allItems = new ItemCol();

// var a = new Item ({name: 'Milk'});
// var b = new Item ({name: 'Eggs'});
// var c = new Item ({name: 'Bread'});















