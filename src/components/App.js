import React  from 'react';
import { Header }  from './Header';
import { Main } from './Main';
import { TOKEN_KEY } from '../constants';
import '../styles/App.css';
class App extends React.Component {
    state = {
        isLoggedIn: !!localStorage.getItem(TOKEN_KEY),
    }
    loginHandler = (response) => {
        localStorage.setItem(TOKEN_KEY, response);
        this.setState({ isLoggedIn: true });
    }
    logoutHandler = () => {
        localStorage.removeItem(TOKEN_KEY);
        this.setState({ isLoggedIn: false });
    }
    render() {
        return (
            <div className="App">
                <Header isLoggedIn={this.state.isLoggedIn} logoutHandler={this.logoutHandler}/>
                <Main isLoggedIn={this.state.isLoggedIn} loginHandler={this.loginHandler}/>
            </div>
        );
    }
}
export default App;
