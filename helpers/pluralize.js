
module.exports = function(number, singular, plural) {
  if (number == 1) {
    return single;
  } else {
    return plural;
  }
};

