# gulp-dependo
A gulp plugin for visualisation CommonJS, AMD, or ES6 module dependencies.
For more information check the [original dependo](https://www.npmjs.com/package/dependo) package.
## Usage
```javascript
var dependo = require('gulp-dependo');

gulp.task('visualize dependencies', function(cb) {
	dependo({targetPath: './path-to-the-package', fileName: 'report.html', outputPath: '.'}, cb);
});
```
## Licence
MIT
