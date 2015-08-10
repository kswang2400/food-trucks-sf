FoodTrucks.Views.Index = Backbone.CompositeView.extend({
  template: JST["index"],
  className: "index",

  events: {
    "click #search": "searchLocation"
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

  render: function () {
    var content = this.template({ trucks: this.collection });
    this.$el.html(content);
    this.attachSubviews();
    return this;  
  },

  searchLocation: function (event) {
    event.preventDefault();
    var query = this.$el.find("#location-search-form").serializeJSON();
    // debugger;
    this.collection.fetch({ 
      data: query,
      success: function () {
        alert("HURRAY")
      }
    });
  }
});