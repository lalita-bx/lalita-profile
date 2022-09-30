import './styles/styles.css'
import ProfileDetails from './components/ProfileDetails';
import AnimeQuotes from './components/AnimeQuotes';

function App() {

    return (
        <div className="app select-none" id="section1">
            <header className="app-header">
                <AnimeQuotes />
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
