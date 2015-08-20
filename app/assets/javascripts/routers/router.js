FoodTrucks.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$root = options.$root;
  },

  routes: {
    "": "index"
  },

  index: function () {
    var trucks= new FoodTrucks.Collections.Trucks();    
    var view = new FoodTrucks.Views.Index({ collection: trucks });
    
    this._swapView(view);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$root.html(view.$el);
    view.render();
  }
});