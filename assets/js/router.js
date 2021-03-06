define(
    ['jquery', 'underscore', 'backbone',
     'views/checkin/lists', 'views/checkin/details', 'views/checkin/add'],
    function($,_,Backbone,
        ListView, DetailsView, AddView){
        var Router = Backbone.Router.extend({
            routes: {
                ""                       : "accueil",
                "checkin/ajout"          : "ajout",
                "checkin/:idCheckin"     : "voir",
                "checkin/edit/:idCheckin": "edit"
            }
        });

        var initialize = function(){
            router = new Router;

            actuRoute = "";
            oldRoute = "";

            $.ajaxPrefilter( function( options, originalOptions, jqXHR ){
                options.crossDomain = { crossDomain: true };
            } );

            router.on('route:accueil',
                function(){
                    //Changement de route
                    oldRoute = actuRoute;
                    actuRoute = ""

                    if(oldRoute == "checkin/ajout")
                      $('#checkin-add:visible').empty();


                    var listView = new ListView();
                    listView.render();
                }
            );

            router.on('route:voir',
                function(idCheckin){
                    //Changement de route
                    oldRoute = actuRoute;
                    actuRoute = "checkin/" + idCheckin;

                    if(oldRoute == "checkin/ajout")
                      $('#checkin-add:visible').empty();
                      
                    var detailsView = new DetailsView({id: idCheckin});
                    detailsView.render();
                }
            );

            router.on('route:ajout',
                function(){
                  //Changement de route
                  oldRoute = actuRoute;
                  actuRoute = "checkin/ajout";

                  var addView = new AddView();
                  addView.render();
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
