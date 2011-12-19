var jQuery = jQuery || django.jQuery;
var armstrong = armstrong || {};
armstrong.widgets = armstrong.widgets || {};
armstrong.constants = armstrong.constants || {};
armstrong.constants.hasWarn = typeof console !== "undefined" && typeof console.warn === "function";

armstrong.widgets.ckeditor_imagepicker = function($, options) {
    var plugin = {
        exec: function(editor) {
            var media = window.showModalDialog(options.browseURL,
                null, "dialogWidth:750px;dialogHeight:500px;center:yes; resizable: yes; help: no");
            if (media != false && media != null) {
                editor.insertHtml(media);
            }
        }
    },
    plugin_name='imagepicker';

    CKEDITOR.plugins.add(plugin_name, {
        init: function(editor) {
            editor.addCommand(plugin_name, plugin);
            editor.ui.addButton('ImagePicker', {
                label: 'Insert Image',
                icon: this.path + 'toolBarButton.png',
                command: plugin_name
            });
        }
    });
}
