'use strict';

var Dependo = require('dependo');
var gutil = require('gulp-util');
var path = require('path');
var fs = require('fs');

var PluginError = gutil.PluginError;

module.exports = function(options, cb) {
  
  if (!options || !options.targetPath || !options.fileName || !options.outputPath) {
    throw new PluginError('gulp-dependo', 'Path or file name is not specified!');
  }
  
  var targetPath = path.isAbsolute(options.targetPath) ? options.targetPath : path.resolve(options.targetPath);
  
  var baseOutputPath = path.isAbsolute(options.outputPath) ? options.outputPath : path.resolve(options.outputPath);

  var outputPath = path.join(baseOutputPath, options.fileName);
  
  var dependoOptions = {
      format: 'amd'
  };

  var dependo = new Dependo(targetPath, dependoOptions);
  var html = dependo.generateHtml();
  
  try {
      fs.writeFileSync(outputPath, html || '');
  } catch (err) {
      throw new PluginError('gulp-dependo', err);
  }
    
  return cb;
 
};