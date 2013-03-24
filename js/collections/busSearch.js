/* global Backbone */
var app = app || {};

(function () {
    'use strict';

    // Bus Collection

    app.BusSearch = Backbone.Collection.extend({
        model: app.Bus,

        initialize: function(models, options){
            this.query = options.query;
        },

        url: function(){
            return 'http://api.istanbus.org/search/bus/' + this.query;
        }
    });
})();