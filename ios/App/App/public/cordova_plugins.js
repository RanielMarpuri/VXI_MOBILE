
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-email-composer.EmailComposer",
          "file": "plugins/cordova-plugin-email-composer/www/email_composer.js",
          "pluginId": "cordova-plugin-email-composer",
        "clobbers": [
          "cordova.plugins.email"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-email-composer": "0.10.1"
    };
    // BOTTOM OF METADATA
    });
    