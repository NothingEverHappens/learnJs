/**
 * Created by netkacila on 30.06.16.
 */
module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                src: [
                    'js/app/*.js'
                ],
                dest: 'js/build/application.js'
            }
        },

    babel: {
      options: {
        plugins: ['transform-react-jsx'],
        presets: ['es2015', 'react']
      },
      jsx: {
        files: [{
          expand: true,
          cwd: 'js/build/',
          src: ['*.js'],
          dest: 'js/build/',
          ext: '.js'
        }]
      }
    },

    uglify: {
        all_src : {
            options : {
              sourceMap : false,
              sourceMapName : 'js/build/sourceMap.map'
            },
            src : 'js/build/application.js',
            dest : 'js/build/application.min.js'
        }
    },
        watch: {
            scripts: {
                files: ['js/app/*.js'],
                tasks: ['concat','babel', 'uglify'],
                options: {
                    spawn: false
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ["concat","babel",'uglify']);

};
