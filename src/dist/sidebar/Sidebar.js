'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sidebar = function Sidebar(props) {
  var header = props.header,
      children = props.children;


  return _react2.default.createElement(
    'nav',
    {
      id: 'sidebar',
      className: 'sidebar',
      role: 'navigation'
    },
    _react2.default.createElement(
      'div',
      { className: 'js-sidebar-content' },
      _react2.default.createElement(
        'header',
        { className: 'logo hidden-sm-down' },
        header
      ),
      children
    )
  );
};

exports.default = Sidebar;
//# sourceMappingURL=Sidebar.js.map