define(['underscore', 'text!./issues.html'], function(_, tpl) {
  var template = _.template(tpl);
  return {
    initialize: function() {
      _.bindAll(this);
      this.org    = this.options.org;
      this.repo   = this.options.repo;
      this.filter = this.options.filter || {};
      this.sandbox.on('github.' + this.options.org + '.selectRepo',   this.selectRepo,  this);
      this.sandbox.on('github.' + this.options.org + '.filterIssues', this.fetchIssues, this);
      this.fetchIssues(this.options.filter);
    },
    selectRepo: function(repo) {
      this.repo = repo;
      this.fetchIssues();
    },
    fetchIssues: function(filter) {
      if (this.org && this.repo) {
        this.filter = _.extend(this.filter, filter || {});
        var path = 'repos/' + this.org + '/' + this.repo + '/issues';
        return this.sandbox.github(path, 'get', this.filter).then(this.render);
      }
    },
    render: function(issues) {
      this.html(template({
        issues: issues,
        filter: this.filter,
        repo: this.repo
      }));
    }
  };
});
