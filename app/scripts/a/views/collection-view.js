import Index from 'views/index';

export default Index.extend({

  initialize: function() {
    this.listenTo(this.collection, 'add remove', this.render);
  },

});
