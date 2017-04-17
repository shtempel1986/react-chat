/**
 * Created by Павел on 16.04.2017.
 */
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = "Login";
    }

    formSubmit(e) {
        e.preventDefault();
        if (e.target[0].value) this.props.onSubmit(e.target[0].value);
        else alert("Пожалуйста введите имя")
    }


    render() {
        return (
            <div className="chat-container login">
                <h1>Чат</h1>
                <img src="img/chat-ico.png" alt=""/>
                <form action="#" id="form-login" onSubmit={this.formSubmit.bind(this)}>
                    <div>
                        <label>имя пользователя <br/>
                            <input type="text" name="input-name" id="input-name"
                                   placeholder="andrea@app.com"/></label><br/>
                    </div>
                    <button type="submit" id="login-submit"><i className="fa fa-caret-right"/><span>Начать чат</span>
                    </button>
                </form>
                <div className="bottom-bg"/>
            </div>
        );
    }
}
Login.PropTypes = {
    onSubmit: PropTypes.function
};