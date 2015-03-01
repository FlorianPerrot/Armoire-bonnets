define(
    ['underscore', 'backbone', 'models/checkin'],
    function(_,Backbone, Checkin){

        var CheckinCollection = Backbone.Collection.extend({
            url: '/checkin',
            model: Checkin
        });

        return CheckinCollection;
    }
);
