define(
    ['jquery', 'underscore', 'backbone',
    'models/checkin', 'text!/assets/templates/checkin/detail.html'],
    function($,_,Backbone,Checkin,CheckinDetailTemplate){
        var CheckinListView = Backbone.View.extend({

            el: "#checkinDetail",

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
                    }
                });
            }
        });

        return CheckinListView;
    }
);
