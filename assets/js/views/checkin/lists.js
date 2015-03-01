define(
    ['jquery', 'underscore', 'backbone', 'collections/checkins'],
    function($,_,Backbone,CheckinCollection){
        var CheckinListView = Backbone.View.extend({
            render: function(){
                checkinCollection = new CheckinCollection();
                checkinCollection.fetch({
                    success: function( checkins ){
                        console.log( checkins.models );
                    }
                });
            }
        });

        return CheckinListView;
    }
);
