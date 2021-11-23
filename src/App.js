import './App.css';
import Header from './components/Header';
import NavMenu from './components/NavMenu';
import About from './sections/About';
import Skills from './sections/Skills';
import Works from './sections/Works';

function App() {
  return (
    <div className="App">
      <NavMenu />
      <div className="content">
        <Header />
        <About />
        <Skills />
        <Works />
      </div>
    </div>
  );
}

export default App;
