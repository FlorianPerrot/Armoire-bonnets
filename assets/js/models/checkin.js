define(
  ['jquery', 'underscore', 'backbone', 'momentjs','models/user' ],
  function($,_,Backbone, Moment, User){
    var Checkin = Backbone.Model.extend({

      urlRoot: 'http://checkin-api.dev.cap-liberte.com/checkin',
      initialize: function(){
        this.set({ 'user' : new User(this.get('user')) })
      },
      getRelativeTime: function(){
        Moment.lang('fr');
        return Moment(this.attributes.created_at, "YYYY-MM-DD HH:mm:ss")
                .fromNow();
      },
      getDate: function(){
        Moment.lang('fr');
        return Moment(this.attributes.created_at, "YYYY-MM-DD HH:mm:ss")
                .format('LLLL');
      }
    });

    return Checkin;
  }
);
