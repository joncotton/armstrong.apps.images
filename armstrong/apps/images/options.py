from django.db import models
from armstrong.hatband.options import ModelAdmin

from .widgets import CKEditorImageWidget


class ImagePickerAdmin(ModelAdmin):
    """
    ModelAdmin from hatband gives us a RichTextEditor for models.TextFields.
    This incorporates the CKEditor ImagePicker plugin and toolbar icon.

    """
    formfield_overrides = {
        models.TextField: {'widget': CKEditorImageWidget},
    }
