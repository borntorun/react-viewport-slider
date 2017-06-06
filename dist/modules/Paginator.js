'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Bullet = require('./Bullet');

var _Bullet2 = _interopRequireDefault(_Bullet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Paginator = function Paginator(props) {

  var style = {
    top: '50%',
    right: '50px',
    position: 'fixed',
    transform: 'translateY(-50%)',
    zIndex: 2
  };

  var aBullets = [];
  for (var i = 0; i < props.bullets; i += 1) {
    aBullets.push(i);
  }
  return _react2.default.createElement(
    'div',
    { className: 'viewport-slider-paginator', style: style },
    aBullets.map(function (i) {
      return _react2.default.createElement(_Bullet2.default, { active: i === props.activeIndex,
        key: i,
        index: i,
        onClick: props.onClick });
    })
  );
};

Paginator.propTypes = {
  activeIndex: _propTypes2.default.number,
  bullets: _propTypes2.default.number.isRequired,
  onClick: _propTypes2.default.func
};

exports.default = Paginator;