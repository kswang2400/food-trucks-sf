FoodTrucks.Views.TruckListItem = Backbone.CompositeView.extend({
  template: JST["truck_list_item"],
  tagName: "li",
  className: "truck-list-item",

  render: function () {
    var content = this.template({ truck: this.model });
    this.$el.html(content);
    return this;
  }
});