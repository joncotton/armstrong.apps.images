from django.forms.util import flatatt
from django.utils.html import conditional_escape
from django.utils.encoding import force_unicode
from django.core.urlresolvers import reverse
from django.template.loader import render_to_string

from armstrong.hatband.widgets.ckeditor import CKEditorWidget


class CKEditorImageWidget(CKEditorWidget):
    template = "images/widgets/ckeditor.html"

    class Media:
        js = ("ckeditor/plugins/imagepicker/plugin.js", )

    def render(self, name, value, attrs=None):
        if value is None: value = ''
        tag_attrs = self.build_attrs(attrs, name=name)
        final_attrs = {
            'editor_id': tag_attrs['id'],
            'images_browse_url': reverse('admin:images_admin_browse'),
            'tag_attrs': flatatt(tag_attrs),
            'value': conditional_escape(force_unicode(value)),
        }
        return render_to_string(self.template, final_attrs)
