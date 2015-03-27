define(
    ['jquery', 'underscore', 'backbone', 'models/checkin', 'text!/assets/templates/checkin/add.html'],
    function($,_,Backbone, CheckinModel, CheckinAddTemplate){
        var CheckinAdd = Backbone.View.extend({

            el: "#checkin-form",
            template: _.template( CheckinAddTemplate ),
            render: function(){
                this.$el.html(this.template());
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
