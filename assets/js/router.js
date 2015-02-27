define(
    ['jquery', 'underscore', 'backbone' ],
    function($,_,Backbone){
        var Router = Backbone.Router.extend({
            routes: {
                ""                       : "accueil",
                "checkin/ajout"          : "ajout",
                "checkin/edit/:idCheckin": "edit"
            }
        });

        var initialize = function(){
            var router = new Router;
            router.on('route:accueil',
                function(){

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
