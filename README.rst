armstrong.apps.images
=====================
Provides functionality around handling images inside Django.


Usage
-----
This package is currently in the process of being revisited.  This section will
be updated once that has been done.


Installation & Configuration
----------------------------
#. ``pip install armstrong.apps.images``

#. Add ``armstrong.apps.images`` and ``armstrong.apps.content`` to your
   ``INSTALLED_APPS``

   (AppsContent is required because ``Image`` extends from its
   ``Content`` model.)

#. Run either ``syncdb`` or ``migrate`` if you are using `South`_


.. _South: http://south.aeracode.org/


Contributing
------------

* Create something awesome -- make the code better, add some functionality,
  whatever (this is the hardest part).
* `Fork it`_
* Create a topic branch to house your changes
* Get all of your commits in the new topic branch
* Submit a `pull request`_

.. _Fork it: http://help.github.com/forking/
.. _pull request: http://help.github.com/pull-requests/


State of Project
----------------
Armstrong is an open-source news platform that is freely available to any
organization.  It is the result of a collaboration between the `Texas Tribune`_
and `The Center for Investigative Reporting`_ and a grant from the
`John S. and James L. Knight Foundation`_.

To follow development, be sure to join the `Google Group`_.

``armstrong.apps.images`` is part of the `Armstrong`_ project.  You're
probably looking for that.

.. _Texas Tribune: http://www.texastribune.org/
.. _The Center for Investigative Reporting: http://cironline.org/
.. _John S. and James L. Knight Foundation: http://www.knightfoundation.org/
.. _Google Group: http://groups.google.com/group/armstrongcms
.. _Armstrong: http://www.armstrongcms.org/


License
-------
Copyright 2011-2013 Texas Tribune and The Center for Investigative Reporting

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

Credits
-------
The image file, smiley.jpg, was created by Dave McLain as a work for hire, its
copyright is held by the Texas Tribune and is licensed under the Creative
Commons Attribution license.
