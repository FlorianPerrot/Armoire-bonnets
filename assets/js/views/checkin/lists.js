define(
    ['jquery', 'underscore', 'backbone', 'collections/checkins'],
    function($,_,Backbone,CheckinCollection){
        var CheckinListView = Backbone.View.extend({

            el: "#checkinlist",

            template: '<h3>test template</h3>',

            render: function(){
                console.log('CheckInListView Render');

                var self = this;

                checkinCollection = new CheckinCollection();

                checkinCollection.fetch({
                    success: function( checkins ){
                        console.log( self.$el );
                        self.$el.html( self.template );
                    }
                });
            }
        });

        return CheckinListView;
    }
);
