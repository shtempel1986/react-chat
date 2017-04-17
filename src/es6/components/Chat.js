/**
 * Created by Павел on 16.04.2017.
 */
export default class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = "Chat";
        this.state = {
            userName: this.props.userName,
            history: []
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            userName: nextProps.userName
        });
    }

    _sendMessage(event) {
        let message = {
            userName: this.state.userName,
            time: new Date()
        }, history = this.state.history;

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
    componentDidUpdate(){
        document.getElementsByClassName("message-window")[0].scrollTop = 9000;
    }

    render() {
        let messages = [], messageClassName = "", key = 0;

        for (let message of this.state.history) {
            if (message.userName === this.state.userName) messageClassName = "user-message";
            else messageClassName = "income-message";
            messages.push(
                <div className={messageClassName} key={key}>
                    <div className="avatar__shadow"/>
                    <div className="avatar">
                        <i className="fa fa-user"/>
                    </div>
                    <div className="message">
                        <div className="message__text">
                            {message.text}
                        </div>
                        <div className="time">{message.time.toDateString()}</div>
                    </div>
                </div>);
            key++;
        }
        return (
            <div className="chat-container chat">
                <h2><i className="fa fa-caret-left"/><span className="names">{this.state.userName}</span></h2>
                <div className="message-window">
                    <div className="message-feed">
                        {messages}
                    </div>
                </div>
                <div className="message-sender">
                    <i className="fa fa-camera"/>
                    <label><input type="text" id="message-input" placeholder="Type message. . ."
                                  onKeyDown={this._sendMessage.bind(this)}/></label>
                    <button type="button" id="message-send" onClick={this._sendMessage.bind(this)}>
                        <img src="img/chat__send.png" alt=""/>
                    </button>
                </div>
            </div>
        );
    }
}
Chat.PropTypes = {
    userName: PropTypes.string.isRequired
};