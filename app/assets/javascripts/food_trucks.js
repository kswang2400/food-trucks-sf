window.FoodTrucks = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function () {
    new FoodTrucks.Routers.Router({ $root: $("#main") });
    FoodTrucks.history.start();
  }
}

$(document).ready(function () {
  FoodTrucks.initialize();
})
