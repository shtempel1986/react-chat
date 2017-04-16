/**
 * Created by Павел on 16.04.2017.
 */
export default class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            userName: this.props.userName,
            hiddenClass:this.props.hiddenClass
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            userName: nextProps.userName,
            hiddenClass:nextProps.hiddenClass
        });
    }

    render() {
        return (
            <div className={this.state.hiddenClass} >
                <h2><i className="fa fa-caret-left"/><span className="names">{this.state.userName}</span></h2>
                <div className="message-window">
                    <div className="message-feed">
                    </div>
                </div>
                <div className="message-sender">
                    <i className="fa fa-camera"/>
                    <label><input type="text" id="message-input" placeholder="Type message. . ."/></label>
                    <button type="button" id="message-send">
                        <img src="img/chat__send.png" alt=""/>
                    </button>
                </div>
            </div>
        );
    }
}