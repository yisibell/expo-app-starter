const getEnvConfig = require('./config')

const { APP_ENV } = process.env

module.exports = ({ config }) => {
  return {
    ...config,
    extra: getEnvConfig(APP_ENV),
  }
}
