// Require all files under dashkit

const channels = require.context('.', true, /\.js$/)
channels.keys().forEach(channels)