define(
  ['jquery', 'underscore', 'backbone', 'models/user' ],
  function($,_,Backbone, User){
    // definition de function
    var Checkin = Backbone.Model.extend({

      urlRoot: '/checkin',
      initialize: function(){
        this.set({ 'user' : new User(this.get('user')) })
      }
    });

    return Checkin;
  }
);
