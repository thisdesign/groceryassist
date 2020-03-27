const path = require("path")
require("dotenv").config()

module.exports = {
  // For absolute imports
  webpack(config) {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        modules: [path.join("src"), path.join(__dirname, "node_modules"), "./"],
        extensions: [".tsx", ".ts", ".js"]
      }
    }
  }
}
