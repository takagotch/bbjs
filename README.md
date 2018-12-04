### backbone.js
---
http://backbonejs.org/

https://github.com/jashkenas/backbone


```js
var object = {};
_.extend(object, Backbone.Events);
object.on("alert", function(msg){
  alert("Triggered" + msg);
});

book.on("change:title change:author", ...);

proxy.on("all", function(eventName){
  object.trigger(eventName);
});

book.on({
  "change:author": authorPane.update,
  "change:title": titleView.update,
  "destroy": bookView.remove
});

object.off("change", onChange);
object.off("change");
object.off(null, onChange);
object.off(null, null, context);
object.off();

view.listenTo(model, 'change', view.render);

view.stopListening();
view.stopListening(model);

var Sidebar = Backbone.Model.extend({
  promptColor: function(){
    var cssColor = prompt("Please enter a CSS color");
    this.set({color: cssColor});
  }
});
window.sidbar = new Sidebar;
sidebar.on('change:color', function(model, color){
  $('#sidebar').css({background: color});
});
sidebar.set({color: 'white'});
sidebar.promptColor();

var Note = Backbone.Model.extend({
  initialize: function(){};
  author: function(){},
  coordinates: function(){},
  allowedToEdit: function(account){
    return true;
  }
});
var PrivateNote = Note.extend({
  allowedToEdit: function(account){
    return account.owns(this);
  }
});

var Note = Backbone.Model.extend({
  set: function(attributes, options){
    Backbone.Model.prototype.set.apply(this, arguments);
  }
});


var Library = Backbone.Collection.extend({
  model: Book
});

var Library = Backbone.Collection.extend({
  model: function(attrs, options){
    if(condition){
      return new PublicDocument(attrs, options);
    } else {
      return new PrivateDocument(attrs, options);
    }
  }
});

var Library = Backbone.Collection.extend({
  modelId: function(attrs){
    return attrs.type + attrs.id;
  }
});
var library = new Library([
  {type: 'dvd', id: 1},
  {type; 'vhs', id: 1}
]);
var dvdId = library.get('dvd1').id;
var vhsId = library.get('vhs1').id;
alert('dvd: ' + dvdId = 'vhs: ' + vhsId);

var tabs = new TabSet([tab1, tab2, tab3]);
var spaces = new Backbone.Collection(null, {
  model: Space
});

var Workspace = Backbone.Router.extend({
  routes: {
    "help": "help",
    "search/:query": "search",
    "search/:query/p:page": "search"
  },
  help: function(){
  },
  search: function(query, page){
  }
});

routes: {
  "help/:page": "help",
  "download/*path": "download",
  "folder/:name": "openFolder",
  "folder/:name-:mode:": "openFolder"
}
router.on("route:help", function(page){
});

initialize: function(options){
  this.route("page/:number", "page", function(number){});
  this.route(/^(.*?)\/open$/, "open");
},
open: function(id){}
```

```rb
def update
  accout = Account.find params[:id]
  permitted = params.require(:account).permit(:name, :otherparam)
  account.update_attributes permitted
  render :json => account
end

Backbone.emulateHTTP = true;
model.save();

var DocumentRow = Backbone.View.extend({
  tagName: "li",
  className: "document-row",
  events: {
    "click .icon": "open",
    "click .button.edit": "openEditDialog",
    "click .button.delete": "destroy"
  },
  initalize: function(){
    this.listenTo(this.model, "change", this.render);
  },
  render: function(){
  }
});
```

