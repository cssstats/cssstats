
var Humanize = require('humanize-plus');

module.exports = {
  number: function(number) {
    if (!number) return 0;
    var length = number.toString().length;
    if (length > 4) {
      return Humanize.compactInteger(number, 1);
    } else {
      return Humanize.intComma(number);
    }
  },
  filesize: function(number) {
    if (!number) return 0;
    return Humanize.fileSize(number);
  }
}

