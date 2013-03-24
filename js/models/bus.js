/* global Backbone */
var app = app || {};

(function () {
    'use strict';

    // Bus Model

    app.Bus = Backbone.Model.extend({
        urlRoot : 'http://api.istanbus.org/bus',

        defaults: {
            name: '',
            id: 0
        }
    });
})();