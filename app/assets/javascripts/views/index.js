FoodTrucks.Views.Index = Backbone.CompositeView.extend({
  template: JST["index"],
  className: "index col-md-8 col-md-offset-2",

  events: {
    "click #search-input": "searchByLocation",
    "click #search-current": "searchByCurrentLocation"
  },

  initialize: function (options) {
    this.collection = options.trucks;

    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addTruckListItemSubview);
  },

  addTruckListItemSubview: function (truck) {
    var subview = new FoodTrucks.Views.TruckListItem({ model: truck });
    this.addSubview("#trucks-list", subview);
  },

  searchByCurrentLocation: function () {
    $('#spinner').show();
    navigator.geolocation.getCurrentPosition(function (pos) { 
      var latitude = pos.coords.latitude
      var longitude = pos.coords.longitude
      var query = { location: {
        latitude: latitude,
        longitude: longitude
      }}

      $("#trucks-list").empty();

      this.collection.fetch({ 
        data: query,
        reset: true,
        success: function (response) {
          console.log(response);
        }.bind(this)
      });     
    }.bind(this));
  },

  render: function () {
    var content = this.template({ trucks: this.collection });
    this.$el.html(content);
    this.attachSubviews();
    return this;  
  },

  searchByLocation: function (event) {
    event.preventDefault();

    var query = this.$el.find("#location-search-form").serializeJSON();

    this.collection.fetch({ data: query });
  }
});