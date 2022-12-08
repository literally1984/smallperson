{
  mode: 'production',
  resolve: {
    modules: [
      'node_modules'
    ]
  },
  plugins: [
    ProgressPlugin {
      profile: false,
      handler: [Function: handler],
      modulesCount: 5000,
      dependenciesCount: 10000,
      showEntries: true,
      showModules: true,
      showDependencies: true,
      showActiveModules: false,
      percentBy: undefined
    },
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {}
          },
          {
            loader: 'css-loader',
            options: {}
          }
        ],
        exclude: undefined,
        include: undefined
      }
    ]
  },
  entry: {
    main: [
      'C:\\Users\\bungl\\Documents\\GitHub\\Bnogorpg-site\\build\\js\\packages\\Bnogorpg-site\\kotlin\\Bnogorpg-site.js'
    ]
  },
  output: {
    path: 'C:\\Users\\bungl\\Documents\\GitHub\\Bnogorpg-site\\build\\distributions',
    filename: [Function: filename],
    library: 'Bnogorpg-site',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devtool: 'source-map',
  ignoreWarnings: [
    /Failed to parse source map/
  ],
  stats: {
    warnings: false,
    errors: false
  }
}