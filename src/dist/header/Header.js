'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(props) {
  return _react2.default.createElement(
    'nav',
    { className: 'page-controls navbar navbar-dashboard' },
    _react2.default.createElement(
      'div',
      { className: 'container-fluid' },
      _react2.default.createElement(
        'div',
        { className: 'navbar-header' },
        _react2.default.createElement(
          'ul',
          { className: 'nav navbar-nav' },
          _react2.default.createElement(
            'li',
            { className: 'nav-item' },
            _react2.default.createElement(
              'a',
              {
                className: 'hidden-md-down nav-link',
                id: 'nav-state-toggle',
                href: '#',
                'data-toggle': 'tooltip',
                'data-html': 'true',
                'data-original-title': 'Turn<br>on/off<br>sidebar<br>collapsing',
                'data-placement': 'bottom'
              },
              _react2.default.createElement('i', { className: 'fa fa-bars fa-lg' })
            ),
            _react2.default.createElement(
              'a',
              {
                className: 'hidden-lg-up nav-link',
                id: 'nav-collapse-toggle',
                href: '#',
                'data-html': 'true',
                title: 'Show/hide<br>sidebar',
                'data-placement': 'bottom'
              },
              _react2.default.createElement(
                'span',
                { className: 'rounded rounded-lg bg-gray text-white hidden-md-up' },
                _react2.default.createElement('i', { className: 'fa fa-bars fa-lg' })
              ),
              _react2.default.createElement('i', { className: 'fa fa-bars fa-lg hidden-sm-down' })
            )
          )
        ),
        _react2.default.createElement(
          'ul',
          { className: 'nav navbar-nav navbar-right hidden-md-up' },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#', 'data-toggle': 'chat-sidebar' },
              _react2.default.createElement(
                'span',
                { className: 'rounded rounded-lg bg-gray text-white' },
                _react2.default.createElement('i', { className: 'fa fa-globe fa-lg' })
              )
            )
          )
        ),
        _react2.default.createElement(
          'a',
          { className: 'navbar-brand hidden-md-up', href: 'index.html' },
          _react2.default.createElement('i', { className: 'fa fa-circle text-gray mr-n-sm' }),
          _react2.default.createElement('i', { className: 'fa fa-circle text-warning' }),
          '\xA0 sing \xA0',
          _react2.default.createElement('i', { className: 'fa fa-circle text-warning mr-n-sm' }),
          _react2.default.createElement('i', { className: 'fa fa-circle text-gray' })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'collapse navbar-collapse' },
        _react2.default.createElement(
          'ul',
          { className: 'nav navbar-nav pull-xs-right' },
          _react2.default.createElement(
            'li',
            { className: 'dropdown nav-item' },
            _react2.default.createElement(
              'a',
              {
                href: '#',
                className: 'dropdown-toggle dropdown-toggle-notifications nav-link',
                id: 'notifications-dropdown-toggle',
                'data-toggle': 'dropdown'
              },
              _react2.default.createElement(
                'span',
                { className: 'thumb-sm avatar pull-xs-left' },
                _react2.default.createElement('img', { className: 'img-circle', src: 'demo/img/people/a5.jpg', alt: '...' })
              ),
              '\xA0 Philip ',
              _react2.default.createElement(
                'strong',
                null,
                'Smith'
              ),
              '\xA0',
              _react2.default.createElement(
                'span',
                { className: 'circle bg-warning fw-bold' },
                '13'
              ),
              _react2.default.createElement('b', { className: 'caret' })
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'dropdown nav-item' },
            _react2.default.createElement(
              'a',
              { href: '#', className: 'dropdown-toggle nav-link', 'data-toggle': 'dropdown' },
              _react2.default.createElement('i', { className: 'fa fa-cog fa-lg' })
            ),
            _react2.default.createElement(
              'ul',
              { className: 'dropdown-menu dropdown-menu-right' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { className: 'dropdown-item', href: 'profile.html' },
                  _react2.default.createElement('i', { className: 'glyphicon glyphicon-user' }),
                  ' \xA0 My Account'
                )
              ),
              _react2.default.createElement('li', { className: 'dropdown-divider' }),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { className: 'dropdown-item', href: 'calendar.html' },
                  'Calendar'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { className: 'dropdown-item', href: 'inbox.html' },
                  'Inbox \xA0\xA0',
                  _react2.default.createElement(
                    'span',
                    { className: 'label label-pill label-danger animated bounceIn' },
                    '9'
                  )
                )
              ),
              _react2.default.createElement('li', { className: 'dropdown-divider' }),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { className: 'dropdown-item', href: 'login.html' },
                  _react2.default.createElement('i', { className: 'fa fa-sign-out' }),
                  ' \xA0 Log Out'
                )
              )
            )
          )
        )
      )
    )
  );
};

exports.default = Header;
//# sourceMappingURL=Header.js.map