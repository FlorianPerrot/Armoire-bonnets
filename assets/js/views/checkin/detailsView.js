define(
    ['jquery', 'underscore', 'backbone', 'leaflet',
    'models/checkin', 'text!/assets/templates/checkin/detail.html'],
    function($,_,Backbone, L ,Checkin, CheckinDetailTemplate){
        var CheckinListView = Backbone.View.extend({

            el: "#checkin-container",

            template: _.template(CheckinDetailTemplate),

            render: function(){

                var self = this;

                checkin = new Checkin({id:this.id});

                checkin.fetch({
                    success: function( checkin ){
                        console.log( checkin );
                        self.$el.html( self.template({
                            'checkin': checkin
                          })
                        );
                        var map = L.map('map').setView([checkin.lat, checkin.lng], 13);
                    }
                });
            }
        });

        return CheckinListView;
    }
);
