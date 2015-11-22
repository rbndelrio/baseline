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

Getting sourcemaps working is a lost cause right now. Feel free to integrate and PR it!

URLs
----

1. Local: http://localhost:1234/
2. Test: http://FFFF-test.pushdev.net/
3. Stage: http://FFFF-stage.pushdev.net/
4. Production: http://FFFF.com/