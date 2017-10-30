App.NoteDetailView = Backbone.View.extend({
  render: function(){
	render: function(){
	  var template = $('#noteDetailView-template').html();
	  var html = _.template(template, this.model.toJSON());
	  return this;
  }
});