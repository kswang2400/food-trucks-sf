FoodTrucks.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$root = options.$root;
  },

  routes: {
    "": "root",
    "index": "index"
  },

  index: function () {
    var collection= new FoodTrucks.Collections.Trucks();
    // collection.fetch();
    
    var view = new FoodTrucks.Views.Index({ trucks: collection });

    this._swapView(view);
  },

  root: function () {
    
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$root.html(view.$el);
    view.render();
  }
});