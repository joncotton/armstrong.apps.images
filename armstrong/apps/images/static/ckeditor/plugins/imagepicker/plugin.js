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
    button_name = 'ImagePicker',
    static_path = 'plugins/imagepicker/',
    plugin_name = 'imagepicker' + options.editorID;  // new name for each instance

    /* Register the plugin if it hasn't already been */
    if (!CKEDITOR.plugins.registered.hasOwnProperty(plugin_name)) {
        CKEDITOR.plugins.add(plugin_name, {
            init: function(editor) {
                editor.addCommand(plugin_name, plugin);
                editor.ui.addButton(button_name, {
                    label: 'Insert Image',
                    icon: static_path + 'toolBarButton.png',
                    command: plugin_name
                });
            }
        });
    }

    /* Enable the plugin and toolbar icon for this editor instance */
    CKEDITOR.replace(options.editorID, {
        extraPlugins: plugin_name,
        toolbar: 'ImagePickerToolbar',
        toolbar_ImagePickerToolbar:
        [
            { name: 'clipboard', items : [ 'PasteFromWord' ] },
            { name: 'styles', items : [ 'Format' ] },
            { name: 'basicstyles', items : [ 'Bold','Italic','Strike','-','RemoveFormat' ] },
            { name: 'links', items : [ 'Link','Unlink' ] },
            { name: 'media', items : [ button_name ] },
        ],
    });

}
