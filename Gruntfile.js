module.exports = function(grunt) {

    var projectPackage = grunt.file.readJSON('package.json');
    // Project configuration.
    grunt.initConfig({
        pkg: projectPackage,
        watch: {
            // scripts: {
            //     files: ['<%= ui.ui %>/scripts/{,*/}*.js'],
            //     tasks: ['uglify:dist']
            // },
            styles: {
                files: ['<%= ui.ui %>/styles/less/{,*/}*.less'],
                tasks: ['less:dev']
            },
            templates: {
                files: ['<%= ui.ui %>/handlebars-templates/{,*/}*.hbs'],
                tasks: ['handlebars:compile']
            }
        },
        clean: {
            dist: ['<%= ui.dist %>/**/*', '!<%= ui.dist %>/**/.svn']
        },
        uglify: {
            dist: {
                options: {
                  mangle: false
                },
                files: {
                    '<%= ui.dist %>/scripts/jakos.<%= pkg.version %>.min.js': projectPackage.globalScripts,
                    '<%= ui.dist %>/scripts/jakos-apparel-wizard.<%= pkg.version %>.min.js': projectPackage.apparelWizardScripts
                }
            }
        },
        copy: {
            scripts: {
                files: [
                {
                    expand: true,
                    dot: true,
                    cwd: '<%= ui.ui %>/scripts/thirdparty',
                    dest: '<%= ui.dist %>/scripts/thirdparty',
                    src: [
                        '**/*.*',
                        '!.svn/**/*',
                        '!**/.svn/**/*'
                    ]
                },
                {
                    expand: true,
                    dot: true,
                    cwd: '<%= ui.ui %>/scripts/upload',
                    dest: '<%= ui.dist %>/scripts/upload',
                    src: [
                        '**/*.*',
                        '!.svn/**/*',
                        '!**/.svn/**/*'
                    ]
                }
                ]
            },
        },
        handlebars: {
            compile: {
                options: {
                    namespace: "JP.templates"
                },
                files: {
                    "ui/handlebars-templates/templates.js": "ui/handlebars-templates/**/*.hbs",
                }
            }
        },
        fileindex: {
            list: {
                options: {
                    format: 'json_flat',
                    pretty: true
                },
                files: [
                    {dest: 'imageList.json', src: ['images/**/*']}, filter: 'isFile'}
                ]
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-fileindex');


    // Default task(s).


    grunt.registerTask('build', [

    ]);





    grunt.registerTask('default', 'build');

};
