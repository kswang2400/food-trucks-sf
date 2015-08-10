FoodTrucks.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$root = options.$root;
  },

  routes: {
    "/": "index"
  },

  index: function () {
    var view = new FoodTrucks.Views.Index();

    this._swapView(view);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$root.html(view.$el);
    view.render();
  }
});