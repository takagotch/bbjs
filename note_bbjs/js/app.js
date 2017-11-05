window.App = {};

//test3
var initializeNotes = function(){
  var initializeNotes = function(){
	var Collection = new App.NoteCollection([{
	  title: 'test1',
	  body: 'test1'
	},{
	  title: 'test2',
	  body: 'test2'
	},{
	  title: 'test3',
	  body: 'test3'
	}]);
	
	noteCollection.each(function(note){
	  note.save();
	});
	
	return noteCollection.models;
};

$(function(){
//test1
//var note = new.App.Note({
//	title: 'test',
//	body: 'test'
//});
//var noteView = new App.NoteListItemView({
//  model: note 
//});
//  noteView.render().$el.appendTo($(document.body));
//
//test2
//  var noteCollection = new App.NoteCollection([{
//	title: 'test1',
//	body: 'test1'
//  },{
//	title: 'test2',
//	body: 'test2'
//  }]);
//
//  var mainContainer = new App.Container({
//	el: '#main-container'
//  });
//
//  mainContainer.show(noteListview);
//test3
  App.noteCollection = new App.NoteCollection();
  
  App.mainContainer = new App.Container({
	el: '#main-container'
  });
  
  App.headerContainer = new App.Container({
	el: '#header-container'
  });
  
  App.noteCollection.fetch().then(function(notes){
	if(notes.length === 0){
	  var models = initializeNotes();
	  App.noteCollection.reset(models);
	}
	//var noteListView = new App.NoteListView({
	//  collection: App.noteCollection
	//});
	//
	//App.mainContainer.show(noteListView);
	
	App.router = new App.Router();
	Backbone.history.start();
  });
});