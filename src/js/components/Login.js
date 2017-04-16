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