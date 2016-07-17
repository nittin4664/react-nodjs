module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        easy_rpm: {
            options: {
                name: "post-node-react",
                version: "1.0.0",
                release: 1,
                buildArch: ""
            },
            release: {
                files: [
                    {src: "node_modules/**", dest: "/usr/lib/post-node-react"},
                    {src: "resources/**", dest: "/usr/lib/post-node-react"},
                    {src: "server.js", dest: "/usr/lib/post-node-react"},
                    {src: "process.json", dest: "/usr/lib/process.json"}
                ]
            }
        }
    });

    grunt.loadNpmTasks("grunt-easy-rpm");
    // Default task(s).
    grunt.registerTask('default', ['easy_rpm']);

};
