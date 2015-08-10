// define attributes of the plugin
$.LocationSearch = function (el) {
  this.$el = $(el);
  this.$input = this.$el.find("input"); // input field with typeahead
  this.$ul = this.$el.find("#trucks-list"); // users ul to display queried results
  this.$input.on("keyup", this.handleInput.bind(this));
};

// render new results on each keypress
$.LocationSearch.prototype.handleInput = function (event) {
  // empty search string brings up all users, otherwise query on username
  var trucks = new FoodTrucks.Collections.Trucks();

  trucks.fetch({
    data: {
      query: this.$input.val()
    },

    success: function (collection) {
      $('ul#trucks').empty();
      collection.each(function (truck) {
        var resultView = new FoodTrucks.Views.TruckListItem({
          model: truck
        });
        $('ul#trucks').append(resultView.render().$el);
      });
    }
  })
};

// function to install plugin on html selector
$.fn.locationSearch = function () {
  return this.each(function () {
    new $.LocationSearch(this);
  });
};