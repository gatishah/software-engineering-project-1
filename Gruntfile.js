module.exports = function(grunt) {

  grunt.initConfig({

	  less: 
	  {
	      development: 
	      {
	        options: 
	        {
	          compress: true,
	          yuicompress: true,
	          optimization: 2
	        },
	        files: 
	        [{
	  				expand: true,
	  				src: 
	  				['www/css/www/less/**.less',
	  				 'bower_components/bootstrap/less/bootstrap.less'],
	  				dest: "",
	  				ext: ".css"
	        }]
	      }
	  },
	  
	   concat: {
      package: {
        src: 
        ['bower_components/jquery/dist/jquery-1.11.0.js',
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/bootstrap/dist/js/bootstrap.js', 
        'bower_components/bootstrap/dist/js/bootstrap.min.js',
        'bower_components/d3/d3.v3.min.js', 
        'bower_components/knockout/dist/knockout-3.2.0.js',
        'bower_components/knockout/dist/knockout.js',
        'bower_components/js/clock.js',
        'bower_components/js/to_do_list.js'],
        dest: 'www/js/libs.js'
      }
	  
	  },
	  
  uglify: {
      build: {
        src: 'www/js/libs.js',
        dest: 'www/js/libs.min.js'
      }
    },
    
    jshint: {
      options: {
        browser: true,
        globals: {
          jQuery: true
        }
      },
      validate: {
        files: {
          src: 
          ['bower_components/js/clock.js',
          'bower_components/js/to_do_list.js']
        }
      }
    },
    
  });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-jshint');

  	grunt.registerTask('package', ['concat','uglify']);
	grunt.registerTask('validate', ['jshint']);
	grunt.registerTask('build_all', ['less','concat','jshint','uglify']);
	
	require('load-grunt-tasks')(grunt);

};