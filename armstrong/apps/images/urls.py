from django.conf.urls.defaults import patterns, url

from .views import RenderThumbnail


urlpatterns = patterns('',
    url(r'^thumbnail/(?P<pk>\d+)/original/$',
            RenderThumbnail.as_view(),
            name='images_render_original'
        ),
    url(r'^thumbnail/(?P<pk>\d+)/(?P<geometry>[0-9x]*)/$',
            RenderThumbnail.as_view(),
            name='images_render_thumbnail'
        ),
)
