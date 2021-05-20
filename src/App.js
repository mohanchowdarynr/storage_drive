import FilesView from './components/FilesView/FilesView';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import SideIcons from './components/SideIcons/SideIcons';
import { auth, provider } from "./firebase";
import { useState } from 'react';
import Login from './Authentication/Login';
import './App.css';

function App() {
  const [user, setUser] = useState();
  
  const handleLogin = () => {
    if (!user) {
      auth.signInWithPopup(provider).then((result) => {
        setUser(result.user)
        console.log(result.user)
      }).catch((error) => {
        alert(error.message);
      });
    } else if (user) {
      auth.signOut().then(() => {
        setUser(null)
      }).catch((err) => alert(err.message))
    }
  }
  

  return (
    <div className="app">
      {
        user ? (
          <>
            <Header />
            <div className="app__main">
              <Sidebar />
              <FilesView />
              <SideIcons />
            </div>
          </>
        ) : (
            <div className='app__login'>
               <Login signIn={handleLogin}/>
            </div>
          )
      }
    </div>
  );
}

export default App;
