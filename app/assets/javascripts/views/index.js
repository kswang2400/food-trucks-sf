FoodTrucks.Views.Index = Backbone.CompositeView.extend({
  template: JST["index"],
  className: "index col-md-6 col-md-offset-4",

  events: {
    "click #search-current": "searchByCurrentLocation"
  },

  initialize: function (options) {
    this.collection = options.trucks;

    // KW: Don't call rerender or else google maps goes ape shit
    // this.listenTo(this.collection, "sync", this.render);
    // this.listenTo(this.collection, "add", this.addTruckListItemSubview);

    google.maps.event.addDomListener(window, 'load', function () {
      this.map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 14,
        center: {lat: 37.78, lng: -122.41}
      });

      var myLatlng = new google.maps.LatLng(37.78 ,-122.41);
      var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "You are here!"
      });
    });
  },

  addTruckListItemSubview: function (truck) {
    var subview = new FoodTrucks.Views.TruckListItem({ model: truck });
    this.addSubview("#trucks-list", subview);
  },

  addTruckMarker: function (trucks) {
    var that = this;

    trucks.each(function (truck) {
      var location = truck.get("location")
      var longitude = location["coordinates"][0]
      var latitude = location["coordinates"][1]
      var name = truck.get("applicant")
      console.log(name, longitude, latitude, truck.get("status"));

      var myLatlng = new google.maps.LatLng(latitude, longitude);
      var marker = new google.maps.Marker({
        position: myLatlng,
        map: that.map,
        title: name
      });
    });

    $("#spinner").hide();
  },

  handleError: function () {
    $("#error-message").show();
    $("#spinner").hide();
  },

  searchByCurrentLocation: function () {
    var that = this;

    $("#spinner").show();

    navigator.geolocation.getCurrentPosition(function (pos) { 
      var latitude = pos.coords.latitude
      var longitude = pos.coords.longitude
      var query = { location: {
        latitude: latitude,
        longitude: longitude
      }}

      that.collection.fetch({ 
        data: query,
        success: that.addTruckMarker, 
        error: that.handleError
      });     
    });
  },

  render: function () {
    var content = this.template({ trucks: this.collection });
    this.$el.html(content);
    this.attachSubviews();
    return this;  
  }
});