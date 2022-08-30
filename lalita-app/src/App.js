// import logo from './logo.svg';
import './App.css';
import ProfileDetails from './components/ProfileDetails';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
    return (
        <div className="App" id="section1">
            <header className="App-header">
                <div class="text-5xl font-extrabold">
                    <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-deep-purple-500">
                        Hello world
                    </span>
                </div>
                <div class="relative h-32 w-32 ">
                    <div class="absolute inset-x-0 bottom-0 h-16">
                        <a href="#section2" class="text-pink-500">
                            <i className="fas fa-angle-down mb-10 animate-bounce w-6 h-6 " />
                        </a>
                    </div>
                </div>
            </header>
            <div>
                <ProfileDetails />
            </div>
        </div>
    );
}

export default App;
