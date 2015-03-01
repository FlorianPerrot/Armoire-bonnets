define(
  ['jquery', 'underscore', 'backbone' ],
  function($,_,Backbone){
    // definition de function
    var Checkin = Backbone.Model.extend({
      defaults: {
        id: "",
        created_at: (new Date()).toJSON(),
        updated_at: (new Date()).toJSON(),
        lat: "",
        lng:"",
        deleted_at: null
      },
      initialize: function(){
        
      }
    });

    return Checkin;
  }
);
