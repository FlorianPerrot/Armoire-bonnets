define(
    ['jquery', 'underscore', 'backbone', 'leaflet', 'leaflet_draw',
    'models/checkin', 'text!/assets/templates/checkin/add.html'],
    function($,_,Backbone, Leaflet, LeafletDraw, CheckinModel, CheckinAddTemplate){
        var CheckinAdd = Backbone.View.extend({

            el: "#checkin-form",
            template: _.template( CheckinAddTemplate ),

            render: function(){
                this.$el.html(this.template());

                //Leaflet map
                var map = L.map('map').setView([0, 0], 1);
                L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                  maxZoom: 22})
                .addTo(map);

                //Edit tools
                var drawnItems = new L.FeatureGroup();
                map.addLayer(drawnItems);
                var drawControl = new L.Control.Draw({
                  draw: {
                    circle: false,
                    polygon: false,
                    rectangle: false,
                    polyline: false,
                  },
                  edit: {
                    featureGroup: drawnItems,
                  }
                });
                map.addControl(drawControl);

                //Map event
                var actuMarker;
                map.on('draw:created', function (e) {
                  if(actuMarker !== undefined)
                    map.removeLayer(actuMarker);
                  actuMarker = e.layer;

                  actuMarker.bindPopup(
                    'Lat: '+actuMarker._latlng.lat+'</br>'+
                    'Lng: '+actuMarker._latlng.lng
                  );
                  drawnItems.addLayer(actuMarker);

                  $('form .lat').attr('value', actuMarker._latlng.lat);
                  $('form .lng').attr('value', actuMarker._latlng.lng);
              });
            },

            events: {
              "submit #checkin-form": "addCheckin"
            },

            addCheckin: function(e){
              e.preventDefault();

              var serializeArray = $(e.currentTarget).serializeArray();
              var checkin = new CheckinModel();

              $.each( serializeArray, function(index, o){
                checkin.set( o.name, o.value );
              });
              checkin.save();

              return false;
            }
        });

        return CheckinAdd;
    }
);
