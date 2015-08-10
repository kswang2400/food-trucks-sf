window.FoodTrucks = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function () {
    alert("backbone");
    new FoodTrucks.Routers.Router({ $root: $("#main") });
    Backbone.history.start();
  }
}

$(document).ready(function () {
  FoodTrucks.initialize();
})
