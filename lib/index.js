'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _shortcuts = require('./shortcuts');

var _shortcuts2 = _interopRequireDefault(_shortcuts);

var _types = require('./types');

var _types2 = _interopRequireDefault(_types);

exports['default'] = function (JXT) {

    JXT.use(_types2['default']);
    JXT.use(_shortcuts2['default']);
};

module.exports = exports['default'];
//# sourceMappingURL=index.js.map