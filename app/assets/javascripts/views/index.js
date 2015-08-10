FoodTrucks.Views.Index = Backbone.CompositeView.extend({
  template: JST["index"],
  className: "index",

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
    navigator.geolocation.getCurrentPosition(function (pos) { 
      var latitude = pos.coords.latitude
      var longitude = pos.coords.longitude
      var query = { location: {
        latitude: latitude,
        longitude: longitude
      }}

      this.collection.fetch({ data: query });     
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

    this.collection.fetch({ 
      data: query,
      success: function () {
        alert("HURRAY")
      }
    });
  }
});