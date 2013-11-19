module.exports = function(grunt) {

  grunt.initConfig({

    dirTmp: '.tmp/',
    dirRelease: 'build/release/',
    dirDebug: 'build/debug/',

    uglify: {
      prod: {
        files: {
          '<%= dirRelease %>app.js': '<%= dirTmp %>app.js'
        }
      }
    },

    browserify: {
      options: {
        alias : [
        './bower_components/angular/angular:angular',
        './bower_components/angular-route/angular-route:angular-route'
        ]
      },
      dev: {
        files: {
          '<%= dirDebug %>app.js': 'src/index.js'
        },
        options: {
          debug: true
        }
      },
      prod: {
        files: {
          '<%= dirTmp %>app.js': 'src/index.js'
        },
        options: {}
      }
    },



    watch: {
      dev: {
        files: [
          './lib/**/*.js',
          './src/**/*.js',
          './src/**/*.html'
        ],
        tasks: [
          'browserify:dev', 'copy:all'
        ],
        options: {
          livereload: true,
          spawn: false,
          atBegin: true
        }
      }
    },

    copy: {
      all: {
        // This copies all the html and css into the dist/ folder
        expand: true,
        cwd: 'src/',
        src: ['**/*.html', '**/*.css'],
        dest: 'build/debug/',
      },
    },


    connect: {
      dev: {
        options: {
          livereload: true,
          port: 3000,
          base: '.'
        }
      }
    }
  });



  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('debug', [
    'browserify:dev'
  ]);

  grunt.registerTask('server', [
    'connect:dev',
    'watch:dev'
  ]);

  grunt.registerTask('release', [
    'browserify:prod',
    'uglify:prod'
  ]);

  grunt.registerTask('default', [
    'debug'
  ]);
};