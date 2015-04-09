define(
    ['jquery', 'underscore', 'backbone', 'leaflet',
    'models/checkin', 'text!/assets/templates/checkin/detail.html', 'text!/assets/templates/checkin/error.html'],
    function($,_,Backbone, L ,CheckinModel, CheckinDetailTemplate, ErrorTemplate){
        var CheckinListView = Backbone.View.extend({

            el: "#checkin-container",

            template: _.template(CheckinDetailTemplate),

            render: function(){

                var self = this;

                checkin = new CheckinModel({id:this.id});

                checkin.fetch({
                    success: function( checkin ){
                        console.log( checkin );
                        self.$el.html( self.template({
                            'checkin': checkin
                          })
                        );

                        console.log(checkin.get('user'));
                        var map = L.map('map').setView([checkin.attributes.lat, checkin.attributes.lng], 4);
                        L.marker([checkin.attributes.lat, checkin.attributes.lng]).addTo(map);
                        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                          maxZoom: 22})
                        .addTo(map);
                    },
                    error: function( e ){
                      errorTemplate = _.template( ErrorTemplate )
                      self.$el.html(
                        errorTemplate({ error_message:
                          "Erreur lors du chargement de la checkin "+ self.id +", veillez vérifier votre connexion Internet."
                        })
                      );
                    }
                });
            },
            events: {
              "click .delete": "delete"
            },
            delete: function(e){
              checkin.destroy(
              );
              Backbone.Router.navigate('', {trigger: true});
              return false;
            }
        });

        return CheckinListView;
    }
);
