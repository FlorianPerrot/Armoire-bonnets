define(
    ['jquery', 'underscore', 'backbone',
    'collections/checkins', 'text!/assets/templates/checkin/list.html', 'text!/assets/templates/checkin/error.html'],
    function($,_,Backbone,CheckinCollection, CheckinlistTemplate, ErrorTemplate){
        var CheckinListView = Backbone.View.extend({

            el: "#checkin-container",

            template: _.template(CheckinlistTemplate),

            render: function(){

                var self = this;

                checkinCollection = new CheckinCollection();

                checkinCollection.fetch({
                    success: function( checkins ){
                        self.$el.html( self.template({
                            checkins: checkins.models
                          })
                        );
                    },
                    error: function( e ){
                      errorTemplate = _.template( ErrorTemplate )
                      self.$el.html(
                        errorTemplate({ error_message:
                          "Erreur lors du changement des checkins, veillez vérifier votre connexion Internet."
                        })
                      );
                    }
                });
            }
        });

        return CheckinListView;
    }
);
