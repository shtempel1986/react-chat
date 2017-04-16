"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by Павел on 16.04.2017.
 */
var Chat = function (_React$Component) {
    _inherits(Chat, _React$Component);

    function Chat(props) {
        _classCallCheck(this, Chat);

        var _this = _possibleConstructorReturn(this, (Chat.__proto__ || Object.getPrototypeOf(Chat)).call(this, props));

        _this.state = {
            userName: _this.props.userName,
            hiddenClass: _this.props.hiddenClass
        };
        return _this;
    }

    _createClass(Chat, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                userName: nextProps.userName,
                hiddenClass: nextProps.hiddenClass
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: this.state.hiddenClass },
                React.createElement(
                    "h2",
                    null,
                    React.createElement("i", { className: "fa fa-caret-left" }),
                    React.createElement(
                        "span",
                        { className: "names" },
                        this.state.userName
                    )
                ),
                React.createElement(
                    "div",
                    { className: "message-window" },
                    React.createElement("div", { className: "message-feed" })
                ),
                React.createElement(
                    "div",
                    { className: "message-sender" },
                    React.createElement("i", { className: "fa fa-camera" }),
                    React.createElement(
                        "label",
                        null,
                        React.createElement("input", { type: "text", id: "message-input", placeholder: "Type message. . ." })
                    ),
                    React.createElement(
                        "button",
                        { type: "button", id: "message-send" },
                        React.createElement("img", { src: "img/chat__send.png", alt: "" })
                    )
                )
            );
        }
    }]);

    return Chat;
}(React.Component);

exports.default = Chat;