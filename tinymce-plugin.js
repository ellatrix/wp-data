(function (tinymce) {
  /*
   * To do:
   *
   * - Send commands usage and source (button, shortcut).
   * - Send button position (toolbar and column).
   */
  tinymce.PluginManager.add('wpdotorg_data', function (editor) {
    tinymce.each(editor.buttons, function (settings, name) {
      var onclick = settings.onclick

      settings.onclick = function () {
        var data = {
          uniqueHash: '',
          editor: editor.id,
          button: name
        }

        // Send to server.
        // Image? sendBeacon (needs fallback)? Store locally? Store on host server?
        // window.navigator.sendBeacon('https://data.wordpress.org/log', data)
        window.console.log(data)

        if (onclick) return onclick.apply(this, arguments)
      }
    })
  })
})(window.tinymce)
