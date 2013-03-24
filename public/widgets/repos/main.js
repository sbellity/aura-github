define(['text!./repos.html'], function (tpl) {

  var template = _.template(tpl);

  return {

    initialize: function () {
      _.bindAll(this);
      if (this.options.user) {
        this.owner = this.options.user;
        this.path = 'users/' + this.options.user + '/repos';
      } else if (this.options.org) {
        this.owner = this.options.org;
        this.path = 'orgs/' + this.options.org + '/repos';
      }
      this.render();
    },

    render: function () {
      this.sandbox.github(this.path).then(function(repos) {
        this.html(template({ repos: repos, owner: this.owner }));
        _.delay(function() {
          this.sandbox.emit('github.' + this.owner + '.selectRepo', repos[0].name);
        }.bind(this), 100);
        this.$el.find('a.repo').on('click', function(e) {
          e.preventDefault();
          var repoName = $(e.target).data('repoName');
          this.sandbox.emit('github.' + this.owner + '.selectRepo', repoName);
        }.bind(this));
      }.bind(this));
    }
  };

});
