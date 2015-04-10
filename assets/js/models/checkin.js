define(
  ['jquery', 'underscore', 'backbone', 'models/user' ],
  function($,_,Backbone, User){
    var Checkin = Backbone.Model.extend({

      urlRoot: 'http://checkin-api.dev.cap-liberte.com/checkin',
      initialize: function(){
        this.set({ 'user' : new User(this.get('user')) })
      }
    });

    return Checkin;
  }
);
