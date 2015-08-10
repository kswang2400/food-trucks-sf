FoodTrucks.Views.Index = Backbone.View.extend({
  template: JST["index"],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
})