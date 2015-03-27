define(
    ['underscore', 'backbone', 'models/checkin'],
    function(_,Backbone, CheckinModel){

        var CheckinCollection = Backbone.Collection.extend({
            url: '/checkin',
            model: CheckinModel
        });

        return CheckinCollection;
    }
);
