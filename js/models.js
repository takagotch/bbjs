App.Note = Backbone.Model.extend({
  defaults: {
	title: '',
    bosy: ''	
	}
});

App.NoteCollection = ackbone.Collection.extend({
  localStorage: new Backbone.LocalStrage('Notes'),
  model: App.Note
});