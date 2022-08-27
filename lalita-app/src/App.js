// import logo from './logo.svg';
import './App.css';
import ProfileDetails from './components/ProfileDetails';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    header.
                </p>
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
            <div >
                <ProfileDetails />
            </div>
        </div>
    );
}

export default App;
