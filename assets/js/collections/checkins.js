define(
    ['underscore', 'backbone'],
    function(_,Backbone){

        var CheckinCollection = Backbone.Collection.extend({
            url: '/checkin'
        });

        return CheckinCollection;
    }
);
