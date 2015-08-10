FoodTrucks.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$root = options.$root;
  },

  routes: {
    "index": "index"
  },

  index: function () {
    var trucks= new FoodTrucks.Collections.Trucks();
    trucks.fetch();
    var view = new FoodTrucks.Views.Index({ trucks: trucks });

    this._swapView(view);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$root.html(view.$el);
    view.render();
  }
});