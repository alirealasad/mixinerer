function mixinerer(target,sources1,sources2) {
  Object.assign(target.prototype,sources1,sources2);
}

module.exports = mixinerer;
