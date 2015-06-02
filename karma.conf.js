module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/components/**/*.js',
      'app/view*/**/*.js',
      'app/bower_components/bootstrap/dist/js/bootstrap.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};

var config = {
  entry: {
    Messenger: './app/Messenger.jsx',
    AppComponent: './app/AppComponent.jsx'
  },

  resolve: {
    modulesDirectories: ['node_modules'],
    alias: {},
    extensions: ['', '.jsx', '.js']
  },

  output: {
    path: './www',
    filename: '[name].bundle.js'
  },

  module: {
    noParse: [],
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' }, // use ! to chain loaders
      { test: /\.png$/, loader: "url-loader?limit=100000&mimetype=image/png" },
      { test: /\.jsx$/, loader: 'jsx-loader?harmony' }
    ]
  }
};

module.exports = config;
