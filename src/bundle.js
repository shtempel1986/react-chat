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

        _this.displayName = "Chat";
        _this.state = {
            userName: _this.props.userName,
            history: []
        };
        return _this;
    }

    _createClass(Chat, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                userName: nextProps.userName
            });
        }
    }, {
        key: "_sendMessage",
        value: function _sendMessage(event) {
            var message = {
                userName: this.state.userName,
                time: new Date()
            },
                history = this.state.history;

            if (event.type === "click" && event.target.previousElementSibling.children[0].value !== "") {
                message.text = event.target.previousElementSibling.children[0].value;
                event.target.previousElementSibling.children[0].value = "";
                history.push(message);
                this.setState({
                    history: history
                });
            } else if (event.target.value !== "" && event.which === 13) {
                message.text = event.target.value;
                event.target.value = "";
                history.push(message);
                this.setState({
                    history: history
                });
            }
        }
        //Прокрутка к последнему сообщению

    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            document.getElementsByClassName("message-window")[0].scrollTop = 9000;
        }
    }, {
        key: "render",
        value: function render() {
            var messages = [],
                messageClassName = "",
                key = 0;

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.state.history[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var message = _step.value;

                    if (message.userName === this.state.userName) messageClassName = "user-message";else messageClassName = "income-message";
                    messages.push(React.createElement(
                        "div",
                        { className: messageClassName, key: key },
                        React.createElement("div", { className: "avatar__shadow" }),
                        React.createElement(
                            "div",
                            { className: "avatar" },
                            React.createElement("i", { className: "fa fa-user" })
                        ),
                        React.createElement(
                            "div",
                            { className: "message" },
                            React.createElement(
                                "div",
                                { className: "message__text" },
                                message.text
                            ),
                            React.createElement(
                                "div",
                                { className: "time" },
                                message.time.toDateString()
                            )
                        )
                    ));
                    key++;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return React.createElement(
                "div",
                { className: "chat-container chat" },
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
                    React.createElement(
                        "div",
                        { className: "message-feed" },
                        messages
                    )
                ),
                React.createElement(
                    "div",
                    { className: "message-sender" },
                    React.createElement("i", { className: "fa fa-camera" }),
                    React.createElement(
                        "label",
                        null,
                        React.createElement("input", { type: "text", id: "message-input", placeholder: "Type message. . .",
                            onKeyDown: this._sendMessage.bind(this) })
                    ),
                    React.createElement(
                        "button",
                        { type: "button", id: "message-send", onClick: this._sendMessage.bind(this) },
                        React.createElement("img", { src: "img/chat__send.png", alt: "" })
                    )
                )
            );
        }
    }]);

    return Chat;
}(React.Component);

exports.default = Chat;

Chat.PropTypes = {
    userName: PropTypes.string.isRequired
};
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
        return _this;
    }

    _createClass(Login, [{
        key: "formSubmit",
        value: function formSubmit(e) {
            e.preventDefault();
            if (e.target[0].value) this.props.onSubmit(e.target[0].value);else alert("Пожалуйста введите имя");
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "chat-container login" },
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
            if (!this.state.chatOn) return React.createElement(_Login2.default, { onSubmit: this.chatToggleOn.bind(this) });else return React.createElement(_Chat2.default, { userName: this.state.userName });
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
},{"./components/Chat":1,"./components/Login":2}]},{},[3])