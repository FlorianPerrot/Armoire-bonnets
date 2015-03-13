define(
    ['jquery', 'underscore', 'backbone',
    'collections/checkins', 'text!/assets/templates/checkin/list.html'],
    function($,_,Backbone,CheckinCollection, CheckinlistTemplate){
        var CheckinListView = Backbone.View.extend({

            el: "#checkinlist",

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
                    }
                });
            }
        });

        return CheckinListView;
    }
);
