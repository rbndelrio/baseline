baseline
===============================================
This is my officially unofficial boilerplate for new projects. Anyone who stumbles upon it is free to fork and pull request!

**[Bitbucket](https://bitbucket.org/rbndelrio/baseline)**  
**[Github](https://github.com/rbndelrio/baseline)** (use this for pull requests)

todo
----
* Getting sourcemaps working is a lost cause right now
* Add a more semantic, stylable alternative form input system (still looking for a good library for this)
* Possibly create a fork using [webpack](https://webpack.github.io/) in place of gulp
	* If so, this repo might be renamed baseline-gulp


_**--- Remove everything above this point for projects ---**_

XXXXXXXXXXXXXXXXX Landing Page
===============================================

<http://FFFF.com/>


Developer Setup
---------------

Ensure you have the following hosts defined in `/etc/hosts`:

    123.456.678 FFFF.prod
    123.456.678 FFFF.local

Ensure you have the following remotes defined in your clone:

    git remote add test push_dev@FFFF.prod:~/repos/heronlandingpages/Test.git
    git remote add stage push_dev@FFFF.prod:~/repos/heronlandingpages/Stage.git
    git remote add prod push_dev@FFFF.prod:~/repos/heronlandingpages/Prod.git

Development
-----------

    npm install
    gulp watch

For vendor libraries, use `bundle` task. If the libraries aren't minified, use the `mindep` task.

The `images` task utilizes the OS X-only [ImageOptim](https://imageoptim.com/) and [ImageAlpha](https://pngmini.com/) to maximize lossless compression ([benchmarks](http://jamiemason.github.io/ImageOptim-CLI/)). JPEGs should be processed through JPEGmini manually unless you want to modify gulp-imageoptim yourself.

URLs
----

1. Local: http://localhost:1234/
2. Test: http://FFFF-test.pushdev.net/
3. Stage: http://FFFF-stage.pushdev.net/
4. Production: http://FFFF.com/