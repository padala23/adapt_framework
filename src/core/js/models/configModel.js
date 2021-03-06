/*
* Adapt
* License - http://github.com/adaptlearning/adapt_framework/LICENSE
* Maintainers - Brian Quinn
*/

define(function(require) {

    var Backbone = require('backbone');
    var Adapt = require('coreJS/adapt');

    var ConfigModel = Backbone.Model.extend({
        defaults: {
            "_defaultLanguage": "en",
            "screenSize" : 
                {"small":519,"medium":759,"large":1024}
        },

        initialize: function(options) {
            this.url = options.url;
            this.fetch({
                success: function() {
                    Adapt.trigger('configModel:dataLoaded');
                },
                error: function() {
                    console.log('Unable to load course/config.json');
                }
            });
        }
    });
   
   return ConfigModel; 
});