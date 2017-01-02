var List = require('immutable').List

var Items = List()

function get() {
   return Items
}

function set(items) {
   Items = items
}

module.exports = {
   get: get,
   set: set
}