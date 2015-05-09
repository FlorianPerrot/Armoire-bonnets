define(
    ['jquery', 'underscore', 'backbone', 'leaflet', 'leaflet_draw',
    'models/checkin', 'text!/assets/templates/checkin/add.html'],
    function($,_,Backbone, Leaflet, LeafletDraw, CheckinModel, CheckinAddTemplate){
        var CheckinAdd = Backbone.View.extend({

            el: "#checkin-add",
            template: _.template( CheckinAddTemplate ),

            render: function(){
                //Affiche le template
                this.$el.html(this.template());
                //$('body').css('overflow','hidden');

                //Set latlng on form
                function setLatlngToForm(marker){
                  if(marker._latlng == undefined){
                    $('form .lat').attr('value', marker.latlng.lat);
                    $('form .lng').attr('value', marker.latlng.lng);
                    map.setView(marker.latlng, 17);
                  }
                  else{
                    $('form .lat').attr('value', marker._latlng.lat);
                    $('form .lng').attr('value', marker._latlng.lng);
                    map.setView(marker._latlng, 17);
                  }
                }

                //Leaflet map
                var map = L.map('map-draw').setView([0, 0], 1);
                L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                  maxZoom: 22})
                .addTo(map);

                //Create custom icon
                var greenIcon = L.icon({
                  iconUrl: 'assets/img/you_are_here.svg',
                  iconSize: [50, 50],
                  iconAnchor: [25, 49]
                });

                //Geoloc actu pos
                if(navigator.geolocation){
                  navigator.geolocation.getCurrentPosition(
                    function(position){
                      L.marker([position.coords.latitude, position.coords.longitude], {icon: greenIcon})
                      .on('click', setLatlngToForm)
                      .addTo(map);

                      $('form .lat').attr('value', position.coords.latitude);
                      $('form .lng').attr('value', position.coords.longitude);
                    }
                  );
                }

                //Init edit tools
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

                  drawnItems.addLayer(actuMarker);
                  setLatlngToForm(actuMarker);
                  actuMarker.on('click', setLatlngToForm);
              });

              //Sortir de l'overlay
              $(document).click(function(event) {
                  if(!$(event.target).closest('#checkin-add .overlay').length) {
                    if($('#checkin-add .overlay').is(":visible")){
                      router.navigate(oldRoute, {trigger: true, replace: true});
                    }
                  }
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
              checkin.save(null, {
                success: function(){
                  router.navigate(oldRoute, {trigger: true, replace: true});
                }
              });

              return false;
            }
        });

        return CheckinAdd;
    }
);
