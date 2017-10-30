App.NoteListItemView = Backbone.View.extend({
  tagName: 'tr',
  
  initialize: function(){
	this.listenTo(this.model, 'destroy', this.remove);
  },
  
  events:{
	'click .js-delete': 'onClickDelete'
  },
  
  render: function(){
	var template = $('#noteListItemView-template').html();
	var html = _.template(template, this.model.toJSON());
	this.$el.html(html);
	return this;
  },
  
  onClickDelete: function() {
	this.model.destroy();
  }
});