define(
    ['underscore', 'backbone', 'models/checkin'],
    function(_,Backbone, CheckinModel){

        var CheckinCollection = Backbone.Collection.extend({
            url: 'http://checkin-api.dev.cap-liberte.com/checkin',
            model: CheckinModel
        });

        return CheckinCollection;
    }
);
