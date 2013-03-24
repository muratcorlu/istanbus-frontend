/* global Backbone _ $ ENTER_KEY */
var app = app || {};

(function () {
    'use strict';

    // The Application

    app.AppView = Backbone.View.extend({
        el: '#istanbusApp',

        busTemplate: _.template($('#bus-template').html()),

        /*events: {
            'keyup #search': 'busSearch'
        },*/

        initialize: function () {
            // this.$input = this.$('#search');
            this.searchResults = app.BusSearch;
            this.searchResultsView = new app.BusView({collection:this.searchResults});
        },

        render: function(){
            this.searchResultsView.render();
            return this;
        }
    });
})();