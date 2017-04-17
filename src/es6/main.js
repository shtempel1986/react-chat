/**
 * Created by Павел on 16.04.2017.
 */
import Login from "./components/Login";
import Chat from "./components/Chat"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chatOn: false
        };
    }

    chatToggleOn(name) {
        this.setState({
            chatOn: true,
            userName: name
        });
    }

    render() {
        if (!this.state.chatOn) return <Login onSubmit={this.chatToggleOn.bind(this)}/>;
        else return <Chat userName={this.state.userName}/>
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("app")
);