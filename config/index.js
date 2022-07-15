const devConfig = require('./env/env.development')

module.exports = function (env) {
  switch (env) {
    case 'development':
      return devConfig
    case 'preview':
      return require('./env/env.preview')
    case 'production':
      return require('./env/env.production')
    default:
      return devConfig
  }
}
