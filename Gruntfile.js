module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'css/style.css': 'css/style.scss'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', ['sass']);

}

