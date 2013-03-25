define({
  initialize: function() {
    this.sandbox.on('github.rateLimit', this.render, this);
  }, 
  render: function(rateLimit) {
    this.html( rateLimit.remaining + ' / ' + rateLimit.limit );
  }
});