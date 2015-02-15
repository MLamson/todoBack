console.log('The Iron Yard Rocks');

var Item = Backbone.Model.extend({

		initialize: function(){

			// console.log('New Item created');
			// console.log(this);
		},

		idAttribute: '_id',

		defaults: {
			name: '',
			status: 'incomplete'
		
		},

		toggleStatus:  function(){
			//console.log('function called');
    if (this.get('status') === 'incomplete') {
    //	console.log('inside toggle if statement');
        this.set({status: 'complete'});
        this.save({status: 'complete'});
      } else {
        this.set({status: 'incomplete'});
        this.save({status: 'incomplete'});
      }
},//end toggle

		
});



var ItemCol = Backbone.Collection.extend({

	initialize: function () {
		// console.log('Item collection Created');
		// console.log(this);
	},

	model: Item,



	url: 'http://tiy-atl-fe-server.herokuapp.com/collections/backboneMark1',


});


var itemCol = new ItemCol();
////////////////////////////////////
//////////////////////////////////////
//get text from field when button in form clicked.
$('#itemForm').on('submit', function(e){
	e.preventDefault();
	//console.log('click');

	var itemName = document.getElementById('text').value;
    // console.log('gettext');
    // console.log(itemName);
    // Create a new Todo
    var itemInstance = new Item({name: itemName});

    //itemCol.add(itemInstance);
    //adding model to collection saving it to database and waiting 
    //until that is done befoer sending to html page
    itemCol.add(itemInstance).save().done( function () {
		  addItem(itemInstance);
		});

    //call function to add item to html page
    //addItem(itemInstance);

    // Clear the form
    //taskname.reset();
    $("#itemForm")[0].reset();
});
////////////////////////////////////////////////
//////////////////////////////////////////////
////toggle status complete incomplete
// Create click event for toggleing todos
  $('#addItemHere').on('click', 'li', function (e) {
    e.preventDefault();

    var thisItem = e.target;
    //var thisItemID = Number(thisItem.id);
    // console.log(thisItem);
    // console.log(thisItem.id);

    // console.log('click toggle 1');
    var thisItemInstance = itemCol.findWhere({ _id: thisItem.id });
    // console.log('click toggle 2');
    // console.log(thisItemInstance);
		
		///////////////////////////////////////////////
		////call fuction to toggle complete status
    thisItemInstance.toggleStatus();
    $(thisItem).removeClass().addClass(thisItemInstance.get('status'));
    ///////////////////////////////////////////
  });

///////////////////////////////////
///////////////////////////////////
//_.template code
var todoTemplate = $('#todoTemp').html();

//console.log(todoTemplate);
var todoTemplateFunc = _.template(todoTemplate);
// console.log(todoTemplateFunc);
// console.dir(todoTemplateFunc);

 addItem = function (item) {
      	// console.log(item);
      	// console.log("in add item func†ion");
   // todoArray.push(item);

   //.attributes needed because of backbone collections
    $('#addItemHere').prepend(todoTemplateFunc(item.attributes));
  };
//////////////////////////////////////
////////////////////////////////////////////
// var allItems = new ItemCol();

// var a = new Item ({name: 'Milk'});
// var b = new Item ({name: 'Eggs'});
// var c = new Item ({name: 'Bread'});


// taskname = document.getElementById('text').value;
    
//     // Create a new Todo
//     taskinstance = new Todo(taskname);

//     // Run the function addTodo
//     addTodo(taskinstance);













