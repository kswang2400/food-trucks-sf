FoodTrucks.Views.Index = Backbone.View.extend({
  template: JST["index"],
  className: "index",

  initialize: function (options) {
    this.collection = options.trucks;

    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function () {
    var content = this.template({ trucks: this.collection });
    this.$el.html(content);
    return this;
  }
});