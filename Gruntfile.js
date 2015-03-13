module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'css/style.css': 'css/style.scss'
        }
      }
    },

    watch: {
      sass: {
        files: ['css/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', ['sass']);

}

