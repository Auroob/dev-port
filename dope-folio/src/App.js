import './App.scss';
import { About } from './components/about/about';
//import BackgroundImage from './components/background/backgroundImage';
import { Introduction } from './components/introduction/introduction';
//import { Projects } from './components/projects/projects';

function App() {
  return (
    <div className="App">
      <Introduction />
      <About />
    </div>
  );
}

export default App;
