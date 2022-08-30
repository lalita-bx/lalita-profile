import './App.css';
import ProfileDetails from './components/ProfileDetails';

function App() {
    
    return (
        <div className="App select-none" id="section1">
            

            <header className="App-header">
                <div className="text-8xl font-extrabold">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300  via-deep-purple-300 to-pink-200 animate-text">
                        Hello<br/>
                        Hello<br/>
                        Hello<br/>
                    </span>
                </div>
                <div className="absolute h-full w-32 ">
                    <div className="absolute inset-x-0 bottom-10 h-16">
                        <a href="#section2" className="text-deep-purple-300">
                            <i className="fas fa-angle-down mb-10 fa-2x animate-bounce w-6 h-6 " />
                        </a>
                    </div>
                </div>
            </header>
            <div className="profile-body">
                <ProfileDetails />
                <footer>
                    <div className="mx-6 py-2">
                        <hr className="my-4 border-gray-200 dark:border-gray-700 lg:my-6" />
                        <span className=" block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 Lalita Y. All Rights Reserved.
                        </span>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default App;
