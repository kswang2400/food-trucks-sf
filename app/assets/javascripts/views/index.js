FoodTrucks.Views.Index = Backbone.CompositeView.extend({
  template: JST["index"],
  className: "index",

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
    // $("#location-search").locationSearch();
    return this;  
  }
});