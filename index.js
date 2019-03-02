function mixinerer(target,...sources) {
  Object.assign(target.prototype,...sources);
}

module.exports = mixinerer;
