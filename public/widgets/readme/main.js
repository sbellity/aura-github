define({

  initialize: function () {
    _.bindAll(this);
    this.repo = this.options.repo;
    this.org  = this.options.org;
    this.sandbox.on('github.' + this.options.org + '.selectRepo', function(repo) {
      this.repo = repo;
      this.render();
    }.bind(this));
    this.render();
  },

  render: function () {
    if (!this.repo || !this.org) { return this.html(''); }
    var path = 'repos/' + this.org + '/' + this.repo + '/readme';
    this.sandbox.github(path).then(function(readme) {
      window.readme = readme;
      var content = atob(readme.content.replace(/\n/g, ""));
      this.sandbox.github('markdown', 'post', { text: content, mode: 'markdown', context: [this.org, this.repo].join("/") }).then(function(content) {
        this.html(content);
      }.bind(this));
    }.bind(this));
  }

});
