define(
  ['jquery', 'underscore', 'backbone' ],
  function($,_,Backbone){
    // definition de function
    var Checkin = Backbone.Model.extend({

      urlRoot: '/checkin',
      initialize: function(){

      }
    });

    return Checkin;
  }
);
