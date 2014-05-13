
exports.second = function(date){
  return timestamp(date, 1000);
};

exports.minute = function(date){
  return timestamp(date, 60 * 1000);
};

exports.hour = function(date){
  return timestamp(date, 60 * 60 * 1000);
};

exports.day = function(date){
  return timestamp(date, 24 * 60 * 60 * 1000);
};

function timestamp(date, factor) {
  date = date || Date.now();
  return Math.floor(date / factor) * factor;
}