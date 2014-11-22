
module.exports = function(number, singular, plural) {
  if (number == 1) {
    return singular;
  } else {
    return plural;
  }
};

