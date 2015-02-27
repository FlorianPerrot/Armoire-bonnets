define(
    ['jquery', 'underscore', 'backbone', 'collections/checkins'],
    function($,_,Backbone,checkinCollection){
        var CheckinListView = Backbone.View.extend({
            render: function(){
                console.log('MyRender of Checkins');
            }
        });

        return CheckinListView;
    }
);
