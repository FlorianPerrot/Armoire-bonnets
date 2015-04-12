module.exports = function(grunt) {
  // Config
  	grunt.initConfig({
  		pkg: grunt.file.readJSON('package.json'),

  		// Compile Sass
  		sass: {
  			dev: {
  				options: {
  					style: 'expanded',
  					loadPath: require('node-bourbon').includePaths
  				},
  				files: {
  					'assets/css/styles.css': 'assets/sass/styles.sass'
  				}
  			},
  			prod: {
  				options: {
  					style: 'compressed',
  					loadPath: require('node-bourbon').includePaths,
  				},
  				files: {
  					'assets/css/styles.css': 'assets/sass/styles.sass'
  				}
  			}
  		},

  		// Concatenate all js files and libraries
  		concat: {
  			dist: {
  				src: [
  					'assets/js/*.js' // All JS in the libs folder
  				],
  				dest: 'assets/js/main.js'
  			}
  		},

  		// Watch all html, js and Sass and compile them
  		watch: {
  			css: {
  				files: ['assets/sass/**/*.sass'],
  				tasks: ['sass:dev'],
  				options: {
  						spawn: false,
  				}
  			}
  		},

  		// Minify all images (except svg)
  		imagemin: {
  			dynamic: {
  				files: [{
  						expand: true,
  						cwd: 'assets/img/',
  						src: ['**/*.{png,jpg,gif}'],
  						dest: 'build/assets/img/'
  				}]
  			}
  		},

  		// Minify svg
  		svgmin: {
  			dynamic: {
  				files: [{
  						expand: true,
  						cwd: 'assets/img/',
  						src: ['**/*.{svg}'],
  						dest: 'assets/img/'
  				}]
  			}
  		}
  	});

  	// Dependency
  	grunt.loadNpmTasks('grunt-contrib-copy');
  	grunt.loadNpmTasks('grunt-contrib-sass');
  	grunt.loadNpmTasks('grunt-contrib-concat');
  	grunt.loadNpmTasks('grunt-contrib-uglify');
  	grunt.loadNpmTasks('grunt-contrib-imagemin');
  	grunt.loadNpmTasks('grunt-svgmin');
  	grunt.loadNpmTasks('grunt-contrib-watch');

  	// Tasks
  	grunt.registerTask( 'default', [ 'watch'] ); // Default
};
