define(
    ['jquery', 'underscore', 'backbone', 'views/checkin/lists' ],
    function($,_,Backbone, CheckinListView){
        var Router = Backbone.Router.extend({
            routes: {
                ""                       : "accueil",
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
                    console.log('Accueil');
                }
            );

            router.on('route:ajout',
                function(){

                }
            );

            router.on('route:edit',
                function(idCheckin){
                    console.log('edit: '+idCheckin);
                }
            );

            Backbone.history.start();
        };

        return {
            initialize: initialize
        };
    }
);
