define(
  ['jquery', 'underscore', 'backbone' ],
  function($,_,Backbone){
    // definition de function
    var User = Backbone.Model.extend({

      initialize: function(){
      }
    });

    return User;
  }
);
