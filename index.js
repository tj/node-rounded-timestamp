
exports.second = function(){
  return timestamp(1000);
};

exports.minute = function(){
  return timestamp(60 * 1000);
};

exports.hour = function(){
  return timestamp(60 * 60 * 1000);
};

exports.day = function(){
  return timestamp(24 * 60 * 60 * 1000);
};

function timestamp(factor) {
  return Math.floor(Date.now() / factor) * factor;
}