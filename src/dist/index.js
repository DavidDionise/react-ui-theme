'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _header = require('./header');

Object.keys(_header).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _header[key];
    }
  });
});

var _sidebar = require('./sidebar');

Object.keys(_sidebar).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _sidebar[key];
    }
  });
});
//# sourceMappingURL=index.js.map