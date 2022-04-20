module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            less: {
                files: ['sass/**.scss'],
                tasks: ['sass'],
            }
        },

        sass: {
            dist: {
                expand: true,
                cwd: 'sass/',
                src: ['**/*.scss'],
                dest: 'assets/',
                ext: '.css',
                options: {
                    'sourcemap': 'none'
                }
            }
        }

    });

    // Plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-sync');

    // Default task(s).
    grunt.registerTask('default', ['watch']);


};