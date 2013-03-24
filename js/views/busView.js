/* global Backbone _ $ */
var app = app || {};

(function () {
    'use strict';

    // The Application

    app.BusView = Backbone.View.extend({
        el: '#istanbusApp',

        template: _.template($('#bus-template').html()),

        events: {
            'keyup #search': 'busSearch'
        },

        initialize: function () {
            this.$input = this.$('#search');
        },

        busSearch: function () {
            var results = new this.model([], {query: this.$input.val()});
            results.fetch({
                success: function(collection,response,options){
                    
                    console.log(collection.models[0].attributes);
                }
            });
        },

        render: function(){
            $("#searchResults").html(this.template(this.model.attributes));
            return this;
        }
    });
})();