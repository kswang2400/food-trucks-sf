FoodTrucks.Views.Index = Backbone.View.extend({
  template: JST["index"],
  className: "index col-md-6 col-md-offset-4",

  events: {
    "click #search-current": "searchByCurrentLocation",
    "click #refresh": "refreshPage"
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

  initializeMap: function () {
    this.map = new google.maps.Map(document.getElementById('map-canvas'), {
      zoom: 14,
      center: {lat: this.latitude, lng: this.longitude}
    });

    var myLatlng = new google.maps.LatLng(this.latitude , this.longitude);
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: this.map,
      title: "You are here!"
    });
    
    $("#map-spinner").hide();
  },

  searchByCurrentLocation: function () {
    var that = this;

    $("#spinner").show();

    navigator.geolocation.getCurrentPosition(function (pos) { 
      var latitude = pos.coords.latitude
      var longitude = pos.coords.longitude

      // var latitude = 37.781     // app academy address
      // var longitude = -122.41

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

  refreshPage: function () {
    window.location.reload()
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    navigator.geolocation.getCurrentPosition(function (pos) {
      this.latitude = pos.coords.latitude;
      this.longitude = pos.coords.longitude;

      // this.latitude = 37.781     // app academy address
      // this.longitude = -122.41

      this.initializeMap();
    }.bind(this), function (err) {
      // need to write error handling when user denies permission to use location
      console.log(err);
    });

    setTimeout(function () {
      $("#map-not-load").show();
    }, 2000);

    return this;  
  }
});