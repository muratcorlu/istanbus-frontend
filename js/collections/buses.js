/*global Backbone */
var app = app || {};

(function () {
    'use strict';

    // Bus Collection

    var BusList = Backbone.Collection.extend({
        model: app.Bus,

        url: 'http://api.istanbus.org/bus'
    });

    app.Buses = new BusList();
})();