define(
    ['jquery', 'underscore', 'backbone', 'views/checkin/lists', 'views/checkin/detailsView'],
    function($,_,Backbone, CheckinListView, DetailsView){
        var Router = Backbone.Router.extend({
            routes: {
                ""                       : "accueil",
                "checkin/:idCheckin"     : "voir",
                "checkin/ajout"          : "ajout",
                "checkin/edit/:idCheckin": "edit"
            }
        });

        var initialize = function(){
            var router = new Router;
            $.ajaxPrefilter( function( options, originalOptions, jqXHR ){
                options.url = 'http://checkin-api.dev.cap-liberte.com/' + options.url;
                options.crossDomain = { crossDomain: true };
            } );

            router.on('route:accueil',
                function(){
                    var checkinListView = new CheckinListView();
                    checkinListView.render();
                }
            );

            router.on('route:voir',
                function(idCheckin){
                    var detailsView = new DetailsView({id: idCheckin});
                    detailsView.render();
                }
            );

            router.on('route:ajout',
                function(){

                }
            );

            router.on('route:edit',
                function(idCheckin){

                }
            );

            Backbone.history.start();
        };

        return {
            initialize: initialize
        };
    }
);
