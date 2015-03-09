module.exports = function (grunt) {
 'use strict';
 grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  bower: {
   dev: {
    options: {
     targetDir: '../../olad/www/new/libs',
     install: true,
     copy: true,
     cleanup: true,
     layout: 'byComponent'
    }
   }
  },
  uglify: {
   build: {
    files: [{
     dest: '../../olad/www/new/js/app.min.js',
     src: 'src/js/app.js'
    }],
    options: {
     mangle: true,
     sourceMap: true,
     sourceMapName: '../../olad/www/new/js/app.min.js.map'
    }
   }
  },
  jshint: {
   dev: ['Gruntfile.js', 'src/js/app.js'],
   options: {
    jshintrc: true
   }
  },
  watch: {
   build: {
    files: ['Gruntfile.js', 'src/js/app.js', 'src/css/style.css'],
    tasks: ['jshint:dev', 'uglify:build', 'cssmin:build'],
    options: {
     atBegin: true
    }
   }
  },
  cssmin: {
   build: {
    files: [{
     src: 'src/css/style.css',
     dest: '../../olad/www/new/css/style.min.css'
    }]
   }
  }
 });
 grunt.loadNpmTasks('grunt-contrib-jshint');
 grunt.loadNpmTasks('grunt-contrib-uglify');
 grunt.loadNpmTasks('grunt-contrib-watch');
 grunt.loadNpmTasks('grunt-contrib-cssmin');
 grunt.loadNpmTasks('grunt-bower-task');
 //grunt.file.setBase('../../');
 grunt.registerTask('dev', ['watch:build']);
 grunt.registerTask('build', ['jshint:dev', 'uglify:build', 'cssmin:build']);
};
