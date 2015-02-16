console.log('The Iron Yard Rocks');

var Item = Backbone.Model.extend({
//var deleteImg = 
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
    //console.log(thisItem);
    //var thisItemID = Number(thisItem.id);
    // console.log(thisItem);
    // console.log(thisItem.id);

    // console.log('click toggle 1');
    var thisItemInstance = itemCol.findWhere({ _id: thisItem.id });
    // console.log(thisItemInstance);
    // thisItemInstance.destroy();
    //itemCol.save();
    //itemCol.remove(thisItemInstance);
    // console.log('click toggle 2');
    // console.log(thisItemInstance);
		
		///////////////////////////////////////////////
		////call fuction to toggle complete status
    thisItemInstance.toggleStatus();
    $(thisItem).removeClass().addClass(thisItemInstance.get('status'));
    ///////////////////////////////////////////
  });

  ///////////////////////////////////////////
  ////////////////////////////////////////////
  ////click on event for delting a list item
 $('#addItemHere').on('click' ,'img',function (e) {
   e.preventDefault();

     console.log('image click');

     var itemsInstance = itemCol.where({ status: 'complete' });
 //    var thisItem2 = e.target;
  console.log(itemsInstance);

  itemCol.remove(Item, itemsInstance); 
 //    //console.log(thisItem.class);
 //    var thisItemInstance2 = itemCol.findWhere({ _id: thisItem2.id});
 // 			//itemCol.remove(thisItem);
 //   	itemCol.remove(thisItemInstance2);
 //   	console.log(thisItemInstance2);
 });

		
		///////////////////////////////////////////////
		////call fuction to toggle complete status
  /////  thisItemInstance.toggleStatus();
   ///// $(thisItem).removeClass().addClass(thisItemInstance.get('status'));
    ///////////////////////////////////////////
 

///////////////////////////////////
///////////////////////////////////
//_.template code
var todoTemplate = $('#todoTemp').html();

//console.log(todoTemplate);
var todoTemplateFunc = _.template(todoTemplate);
// console.log(todoTemplateFunc);
// console.dir(todoTemplateFunc);

 addItem = function (item) {
   
    $('#addItemHere').prepend(todoTemplateFunc(item.attributes));
  };


/////////////////////////////////////////
////////////////////////////////////////
////test remove from list.

removeItem = function (item){
	// var thisItemInstance = itemCol.findWhere({ _id: thisItem.id });
	itemCol.remove(item, [item]);
};










