App.NoteListView = Backbone.View.extend({
  tagName: 'table',
  className: 'table',
  initialize: function(options){
	this.collection = options.collection;
	this.listenTo(this.collection, 'reset', this.render);
  },
  render: function(){
	var template = $('#noteListView-template').html();
	this.$el.html(template);
	this.renderItemViews();
	this.removeItemViews();
	return this;
  },
  renderItemViews: function(){
    var $insertionPoint = this.$('.js-noteListItemView-container');
	this.itemViews = this.collection.map(function(note){
	  var itemView = new App.NoteListItemView({
    //this.collection.each(function(note)){
	  //var itemView = new App.NoteListView({
		model: note
	  });
	  $insertionPoint.append(itemView.render().$el);
	  return itemView;
	}, this);
  },
 removeItemViews: function(){
    _.invoke(this.itemViews, 'remove');
 }
});