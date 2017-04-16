/**
 * Created by Павел on 16.04.2017.
 */
import Login from "./components/Login";
import Chat from "./components/Chat"

class App extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            chatOn: false
        };
    }

    chatToggleOn(name){
        this.setState({
            chatOn: true,
            userName: name
        });
    }

    render() {
        return (
        <div>
            <Login onSubmit={this.chatToggleOn.bind(this)} hiddenClass={this.state.chatOn?"hidden":"chat-container login"}/>
            <Chat userName={this.state.userName} hiddenClass={this.state.chatOn?"chat-container chat":"hidden"}/>
        </div>)
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("app")
);