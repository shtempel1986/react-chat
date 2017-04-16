(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
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
var Login = function (_React$Component) {
    _inherits(Login, _React$Component);

    function Login(props) {
        _classCallCheck(this, Login);

        var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

        _this.displayName = "Login";
        _this.state = {
            hiddenClass: _this.props.hiddenClass
        };
        return _this;
    }

    _createClass(Login, [{
        key: "formSubmit",
        value: function formSubmit(e) {
            e.preventDefault();
            if (e.target[0].value) this.props.onSubmit(e.target[0].value);else alert("Пожалуйста введите имя");
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
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
                    "h1",
                    null,
                    "\u0427\u0430\u0442"
                ),
                React.createElement("img", { src: "img/chat-ico.png", alt: "" }),
                React.createElement(
                    "form",
                    { action: "#", id: "form-login", onSubmit: this.formSubmit.bind(this) },
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "label",
                            null,
                            "\u0438\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F ",
                            React.createElement("br", null),
                            React.createElement("input", { type: "text", name: "input-name", id: "input-name",
                                placeholder: "andrea@app.com" })
                        ),
                        React.createElement("br", null)
                    ),
                    React.createElement(
                        "button",
                        { type: "submit", id: "login-submit" },
                        React.createElement("i", { className: "fa fa-caret-right" }),
                        React.createElement(
                            "span",
                            null,
                            "\u041D\u0430\u0447\u0430\u0442\u044C \u0447\u0430\u0442"
                        )
                    )
                ),
                React.createElement("div", { className: "bottom-bg" })
            );
        }
    }]);

    return Login;
}(React.Component);

exports.default = Login;

Login.PropTypes = {
    onSubmit: PropTypes.function
};
},{}],3:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Login = require("./components/Login");

var _Login2 = _interopRequireDefault(_Login);

var _Chat = require("./components/Chat");

var _Chat2 = _interopRequireDefault(_Chat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Павел on 16.04.2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            chatOn: false
        };
        return _this;
    }

    _createClass(App, [{
        key: "chatToggleOn",
        value: function chatToggleOn(name) {
            this.setState({
                chatOn: true,
                userName: name
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(_Login2.default, { onSubmit: this.chatToggleOn.bind(this), hiddenClass: this.state.chatOn ? "hidden" : "chat-container login" }),
                React.createElement(_Chat2.default, { userName: this.state.userName, hiddenClass: this.state.chatOn ? "chat-container chat" : "hidden" })
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
},{"./components/Chat":1,"./components/Login":2}]},{},[3])