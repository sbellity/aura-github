define(['text!./events.html'], function (tpl) {
  var template = _.template(tpl);
  return {

    initialize: function () {
      _.bindAll(this);
      this.render();
    },

    render: function () {
      if (!this.options.org) { return; }
      var path = 'orgs/' + this.options.org + '/events';
      this.sandbox.github(path).then(function(events) {
        this.html(template({ events: events, org: this.options.org }));
      }.bind(this));
    }
  };

});
