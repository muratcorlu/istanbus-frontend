/*global Backbone */
var app = app || {};

(function () {
    'use strict';

    // Bus Model
    // ----------

    app.Todo = Backbone.Model.extend({
        // Default attributes for the Bus
        // and ensure that each todo created has `title` and `completed` keys.
        defaults: {
            name: '',
            id: 0
        }
    });
})();