/* global Backbone */
var app = app || {};

(function () {
    'use strict';

    // Router

    var Workspace = Backbone.Router.extend({
        routes: {
            '': 'index',
            'otobus/:busId': 'busDetail'
        },

        busDetail: function (busId) {
            var model = new app.Bus({id:busId});
            model.fetch({
                success : function(model){
                    var view = new app.BusView({model:model});
                    view.render();
                }
            });
        },

        index: function(){
            new app.AppView();
        }
    });

    app.BusRouter = new Workspace();
    Backbone.history.start();
})();