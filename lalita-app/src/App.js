// import logo from './logo.svg';
import './App.css';
import ProfileDetails from './components/ProfileDetails';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                {/* <h1>
                    <span class="bg-clip-text text-5xl text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                        header
                    </span>
                </h1> */}
                {/* <img src={logo} className="App-logo" alt="logo" />
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a> */}
            </header>
            <div>
                <ProfileDetails />
            </div>
        </div>
    );
}

export default App;
