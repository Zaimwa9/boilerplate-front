const path = require('path');
const { alias } = require('react-app-rewire-alias')
module.exports = function override(config) {
  alias({
    ...config.alias,
    'components': path.resolve(__dirname, 'src/components'),
    'pages': path.resolve(__dirname, 'src/pages'),
    'design-system': path.resolve(__dirname, 'src/design-system'),
    '@public' : 'src/public',
  })(config)

  return config
}
