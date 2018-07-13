const SERVER = 'YOUR SERVER IP'
module.exports = {
  // 加载工程中的image
  loadImage (imgName) {
    var image = require('./resources/' + imgName)
    return image
  },
  // 加载服务器上的image
  image (imgURL) {
    return SERVER + imgURL
  }
}
