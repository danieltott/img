module.exports = function(grunt) {

    var projectPackage = grunt.file.readJSON('package.json');
    // Project configuration.
    grunt.initConfig({
        pkg: projectPackage,
        fileindex: {
            list: {
                options: {
                    format: 'json_flat',
                    pretty: true
                },
                files: [
                    {dest: 'imagelist.json', src: ['images/**/*'], filter: 'isFile'}
                ]
            },
        },
        usebanner: {
            taskName: {
                options: {
                    position: 'top',
                    banner: '---\n'+
                            'layout: none\n'+
                            '---'
                },
                files: {
                    src: [ 'imagelist.json' ]
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-fileindex');
    grunt.loadNpmTasks('grunt-banner');

    // Default task(s).


    grunt.registerTask('build', ['fileindex', 'usebanner']);





    grunt.registerTask('default', 'build');

};
