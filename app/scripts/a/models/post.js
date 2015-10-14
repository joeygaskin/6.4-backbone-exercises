
var Post = Backbone.Model.extend({
  defaults: function(){
    return {
      title: "",
      name: "",
      type:"",
      created_at: Date.now()
    }
  },

  validate: function(attributes) {
    var errors = {};
    if(_.isEmpty(attributes.name)){
      errors.name = "Must have a valid text entry";
    }
    return _.keys(errors).length ? errors : undefined;
  }
});

export default Post;
