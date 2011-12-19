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
    plugin_name='imagepicker',
    button_name='ImagePicker';

    CKEDITOR.plugins.add(plugin_name, {
        init: function(editor) {
            editor.addCommand(plugin_name, plugin);
            editor.ui.addButton(button_name, {
                label: 'Insert Image',
                icon: this.path + 'toolBarButton.png',
                command: plugin_name
            });
        }
    });

    /* Enable the plugin and toolbar icon for editor instances */
    CKEDITOR.replaceAll( function( textarea, config ) {
        if ( textarea.className === CKEDITOR.replaceClass ) {
            config.extraPlugins = plugin_name;
            config.toolbar = 'ImagePickerToolbar';
            config.toolbar_ImagePickerToolbar =
            [
                { name: 'clipboard', items : [ 'PasteFromWord' ] },
                { name: 'styles', items : [ 'Format' ] },
                { name: 'basicstyles', items : [ 'Bold','Italic','Strike','-','RemoveFormat' ] },
                { name: 'links', items : [ 'Link','Unlink' ] },
                { name: 'images', items : [ button_name ] },
            ];
        }
    });
}
