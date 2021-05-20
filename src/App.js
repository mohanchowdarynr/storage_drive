import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Filesview from './components/FilesView/Filesview';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__main">
              <Sidebar />
              <Filesview />
            </div>
    </div>
  );
}

export default App;
