

module.exports = function(grunt) {

    grunt.loadNpmTasks('cssmodeling');

    var configObj = {
        pkg: '<json:package.json>'
    };

    /*==========================
    CSSMODELING
    ==========================*/
    configObj.cssmodeling = configObj.cssmodeling || {};
    configObj.cssmodeling["cssmodeling_flex"] = {
        files: {
            'dist':
            [
                'cssmodeling_flex.json'
            ]
        },
        options: {
            resets:[
                // 'cssmodeling/_resets/**/*.css'
            ],
            type:"less",
            var_prefix:"v-"
        }
    };

    configObj.watch = configObj.watch || {};
    configObj.watch["cssmodeling_flex"] = {
        files:[
            'cssmodeling_flex.json'
        ],
        tasks: ["cssmodel"]
    };


    grunt.initConfig( configObj );
    grunt.registerTask( 'default' , [
        'cssmodeling:cssmodeling_flex'
    ] );

}
