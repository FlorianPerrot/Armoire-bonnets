define(
    ['jquery', 'underscore', 'backbone', 'text!/assets/templates/checkin/checkinAdd.html'],
    function($,_,Backbone,CheckinAddTemplate){
        var CheckinAdd = Backbone.View.extend({

            el: "#checkin-form",
            template: _.template( CheckinAddTemplate ),
            render: function(){
                this.$el.html(this.template());
            }
        });

        return CheckinAdd;
    }
);
